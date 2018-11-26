<?php

//Route::get('/', function () {
//    return view('welcome');
//});

Auth::routes();

Route::get('/', 'AmchartsController@index')->name('app');
Route::get('/socket-chart', 'AmchartsController@newEvent')->name('socket');

Route::get('/home', 'HomeController@index')->name('home');

Route::get('/start/chartrandom', 'AmchartsController@chartrandom')->name('chartrandom');
Route::get('/start/data-chartrandom', 'AmchartsController@chartDataRandom')->name('chartdatarandom');
