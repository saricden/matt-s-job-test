<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PhotographerController;
use App\Http\Controllers\AlbumController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Direct all requests to any domain OTHER THAN those starting with /api to the index view (SPA)
Route::view('{all}', 'index')->where('all', '^(?!api).*$');

// Direct the api calls to their respective controller functions
Route::get('api/photographers', [PhotographerController::class, 'index']);

Route::get('api/photographers/{photographerID}', [PhotographerController::class, 'show']);

Route::get('api/photographers/{photographerID}/albums', [PhotographerController::class, 'getAlbums']);

Route::get('api/albums/{albumID}', [AlbumController::class, 'getAlbum']);