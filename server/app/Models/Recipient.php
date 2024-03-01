<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\Pivot;
use Illuminate\Database\Eloquent\SoftDeletes;

class Recipient extends Pivot
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'user_id', 'message_id', 'read_at', 'joined_at'
    ];

    public $timestamps = false;

    protected $casts = ['read_at' => 'datetime'];

    public function message()
    {
        return $this->belongsTo(Message::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
