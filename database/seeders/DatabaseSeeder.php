<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use DB;
use App\Models\Photographer;
use App\Models\Album;
use App\Models\Picture;
use File;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // Start by deleting any data in the database
        DB::table('photographers')->delete();
        DB::table('albums')->delete();
        DB::table('pictures')->delete();

        // Get and decode the JSON data from landscapes.json
        $json = File::get('database/data/landscapes.json');
        $photographerData = json_decode($json);

        // Create the (in this case) single photographer entry
        $photographer = Photographer::create([
            'name'            => $photographerData->name,
            'bio'             => $photographerData->bio,
            'phone'           => $photographerData->phone,
            'email'           => $photographerData->email,
            'profile_picture' => $photographerData->profile_picture
        ]);

        // And the (in this case) single album entry
        $album = Album::create([
            'owner_id' => $photographer->id
        ]);

        // For every picture element in the album array, create a new picture entry
        foreach ($photographerData->album as $newPhoto) {
            Picture::create([
                'album_id'    => $album->id,
                'title'       => $newPhoto->title,
                'description' => $newPhoto->description,
                'img'         => $newPhoto->img,
                'op_date'     => $newPhoto->date,
                'featured'    => $newPhoto->featured
            ]);
        }

    }
}
