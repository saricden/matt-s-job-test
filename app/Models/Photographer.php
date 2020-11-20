<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

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
