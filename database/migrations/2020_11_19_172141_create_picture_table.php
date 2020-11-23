<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePictureTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        // Create a table for the pictures
        Schema::create('pictures', function (Blueprint $table) {
            $table->id();
            $table->foreignId('album_id');
            $table->string('title');
            $table->string('description');
            $table->string('img');
            $table->boolean('featured');
            $table->date('op_date');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        // Drop the table
        Schema::dropIfExists('pictures');
    }
}
