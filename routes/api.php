<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('login', 'Auth\LoginController@login');

Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::apiResource('categories', 'Api\CategoryController');
    Route::get('products', 'Api\ProductController@index');
});
