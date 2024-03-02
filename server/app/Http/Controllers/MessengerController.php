<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class MessengerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function friends()
    {
        $user = Auth::user();
        $friends = User::where('id', '<>', $user->id)
            ->orderBy('name')->get();
        return response()->json([
            'data' => $friends,
        ]);
    }


    public function chats()
    {
        $user = Auth::user();
        $chats = $user->conversations()->with([
            'lastMessage',
            'participants' => function ($builder) use ($user) {
                $builder->where('id', '<>', $user->id);
            }
        ])->get();

        return response()->json([
            'data' => $chats,
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
