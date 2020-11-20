<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Photographer;
use App\Models\Album;

class PhotographerController extends Controller
{
    // List all photographers
    public function index() {
        $photographers = Photographer::all();

        return $photographers;
    }

    // Show a single photographer by ID
    public function show(Request $request, $id) {
        $photographer = Photographer::find($id);
        
        return $photographer;
    }

    // Add a new photographer
    public function store(Request $request) {
        $photographer = new Photographer;

        $photographer->name = $request->get('name');
        $photographer->bio = $request->get('bio');
        $photographer->phone = $request->get('phone');
        $photographer->email = $request->get('email');
        $photographer->profile_picture = $request->get('profile_picture');

        $photographer->save();

        return $photographer;
    }

    // Update a photographer by ID
    public function update(Request $request, $id) {
        $photographer = Photographer::find($id);
        
        if ($request->has('name'))
            $photographer->name = $request->get('name');
        
        if ($request->has('bio'))
            $photographer->bio = $request->get('bio');

        if ($request->has('phone'))
            $photographer->phone = $request->get('phone');

        if ($request->has('email'))
            $photographer->email = $request->get('email');

        if ($request->has('profile_picture'))
            $photographer->profile_picture = $request->get('profile_picture');
        
        $photographer->save();

        return $photographer;
    }

    // Delete a photographer by ID
    public function destroy(Request $request, $id) {
        $photographer = Photographer::find($id);
        $photographer->delete();
    }

    // Get all albums posted by a given photographer
    public function getAlbums(Request $request, $photographerID) {
        $albums = Album::where('owner_id', $photographerID)->get();

        return $albums;
    }
}
