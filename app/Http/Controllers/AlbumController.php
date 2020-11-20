<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Album;
use App\Models\Picture;

class AlbumController extends Controller
{
    // List all albums
    public function index() {
        $albums = Album::all();

        return $albums;
    }

    // Show a single album by ID
    public function show(Request $request, $id) {
        $album = Album::find($id);
        
        return $album;
    }

    // Add a new album
    public function store(Request $request) {
        $album = new Album;

        $album->owner_id = $request->get('owner_id');

        $album->save();

        return $album;
    }

    // Update a album by ID
    public function update(Request $request, $id) {
        $album = Album::find($id);
        
        if ($request->has('owner_id'))
            $album->owner_id = $request->get('owner_id');
        
        $album->save();

        return $album;
    }

    // Delete a album by ID
    public function destroy(Request $request, $id) {
        $album = Album::find($id);
        $album->delete();
    }

    // Get all pictures from a specific album belonging to a specific photographer
    public function getAlbum(Request $request, $albumID) {
        $photos = Picture::where('album_id', $albumID)->get();

        return $photos;
    }
}
