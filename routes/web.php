<?php

Auth::routes();
Route::get('/home', 'HomeController@index');

Route::get('/datarandom', 'AmchartsController@dataRandom');

Route::get('/', 'AmchartsController@index');
Route::post('/message', 'AmchartsController@postMessage');
