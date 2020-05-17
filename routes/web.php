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

Route::prefix('editor')->group(function () {
    Route::post('{model}', 'EditorController@create');
    // Route::get('{model}', 'EditorController@create');
});

Route::get('describe/{table}', 'EditorController@describe');

Route::get('list/{model?}', 'EditorController@list');
