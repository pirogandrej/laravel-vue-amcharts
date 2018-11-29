<?php

Auth::routes();

Route::get('/home', 'HomeController@index');

Route::get('/', 'AmchartsController@index');
Route::get('/datarandom', 'AmchartsController@dataRandom');
