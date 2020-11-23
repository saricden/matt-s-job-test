<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

// A model to represent a single album owned by a photographer, containing pictures
class Album extends Model
{
    use HasFactory;

    protected $fillable = [
        'owner_id'
    ];
}
