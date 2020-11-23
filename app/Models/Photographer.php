<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

// A model to represent a single photographer
class Photographer extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'bio',
        'phone',
        'email',
        'profile_picture'
    ];
}
