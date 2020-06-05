<?php

use Illuminate\Support\Facades\Route;

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

Route::get('/', function () {
    return view('home');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::get('/cms', 'CMSController@index')->name('cms');
Route::post('/upload_file', 'CMSController@upload_file')->name('upload_file');

Route::prefix('model')->group(function () {
    Route::post('/', 'EditorController@create');
    Route::get('/', 'EditorController@list');
    Route::post('{model_name}/populate', 'EditorController@populate');
    Route::get('{model_name}/browse', 'EditorController@browse');
});

Route::prefix('api')->group(function () {
    // Route::post('{model_name}/populate', 'EditorController@populate');
    Route::get('{model_name}', 'APIController@resource');
    Route::delete('{model_name}/{row_id}', 'APIController@deleteResource');
});
