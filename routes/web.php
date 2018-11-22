<?php

//Route::get('/', function () {
//    return view('welcome');
//});

Auth::routes();

Route::get('/', 'AmchartsController@index')->name('app');

Route::get('/home', 'HomeController@index')->name('home');
