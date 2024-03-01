<?php

namespace App\Http\Controllers;

use App\Events\MessageCreated;
use App\Models\Conversation;
use App\Models\Recipient;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\Rule;
use Throwable;

class MessagesController extends Controller
{
    // 3 / 17 at : 42:12
    // https://www.youtube.com/watch?v=oCda3Qbwoic&list=PL13Ag2mfco66CHVpLKbmgOdO4z4Gl8ad8&index=3

    public function index($id)
    {
        $user = Auth::user();
        $conversation = $user->conversations()->findOrFail($id);
        return $conversation->messages()->paginate();
    }


    public function store(Request $request)
    {
        $this->validationsOfMessage($request);

        $user = Auth::user();
        $conversation_id =  $request->post('conversation_id');
        $user_id =  $request->post('user_id');

        DB::beginTransaction();
        try {

            if ($conversation_id) {
                $conversation = $user->conversations()->findOrFail($conversation_id);
            } else {
                $conversation = Conversation::where('type', '=', 'peer')
                    ->whereHas('participants', function ($builder) use ($user_id, $user) {
                        $builder->join(
                            'participants as participants2',
                            'participants2.conversation_id',
                            '=',
                            'participants.conversation_id'
                        )
                            ->where('participants.user_id', '=', $user_id)
                            ->where('participants2.user_id', '=', $user->id);
                    })->first();

                if (!$conversation) {
                    $this->createConversations($user, $user_id);
                }
            }
            $message = $conversation->messages()->create([
                'user_id' => $user->id,
                'body' => $request->post('message'),
            ]);


            DB::statement(
                '
                INSERT INTO recipients (user_id, message_id)
                SELECT user_id, ? FROM participants
                WHERE conversation_id = ?
                ',
                [$message->id, $conversation->id]
            );
            $conversation->update([
                'last_message_id' => $message->id
            ]);

            DB::commit();

            broadcast(new MessageCreated($message));
        } catch (Throwable $e) {
            DB::rollBack();
            throw $e;
        }
        return $message;
    }

    public function update(Request $request, string $id)
    {
        //
    }

    public function destroy(string $id)
    {
        Recipient::where([
            'user_id' => Auth::id(),
            'message_id' => $id
        ])->delete();

        return [
            'message' => 'deleted!'
        ];
    }


    private function validationsOfMessage($request)
    {
        $request->validate([
            'message' => ['required', 'string'],
            'conversation_id' => [
                Rule::requiredIf(function () use ($request) {
                    return !$request->input('user_id');
                }),
                'int',
                'exists:conversations,id'
            ],
            'user_id' => [
                Rule::requiredIf(function () use ($request) {
                    return !$request->input('conversation_id');
                }),
                'int',
                'exists:users,id'
            ],
        ]);
    }

    private function createConversations($user, $user_id)
    {
        $conversation = Conversation::create([
            'user_id' => $user->id,
            'type' => 'peer',
        ]);

        $conversation->participants()->attach([
            $user->id => ['joined_at' => now()],
            $user_id => ['joined_at' => now()]
        ]);
    }
}
