<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

// A model to represent a single picture, contained in an album owned by a photographer
class Picture extends Model
{
    use HasFactory;

    protected $fillable = [
        'album_id',
        'title',
        'description',
        'img',
        'featured',
        'op_date'
    ];
}
