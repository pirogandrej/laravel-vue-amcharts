<?php

namespace App\Http\Controllers;

use App\Message;
use Illuminate\Http\Request;

class AmchartsController extends Controller
{
    public function index()
    {
//        event(new \App\Events\TestEvent());
        $messages = Message::all();
        return view('amchart', compact('messages'));
    }

    public function postMessage(Request $request){
        Message::create($request->all());
        return redirect()->back();

    }

    public function dataRandom(){
        return [
            'labels' => ['март', 'апрель', 'май', 'июнь'],
            'datasets' => array(
                [
                    'label' => 'Золото',
                    'backgroundColor' => '#f26202',
                    'data' => [ rand(0,40000), rand(0,40000), rand(0,40000), rand(0,40000) ]
                ],
                [
                    'label' => 'Серебро',
                    'backgroundColor' => '#00ee00',
                    'data' => [ rand(0,40000), rand(0,40000), rand(0,40000), rand(0,40000) ]
                ]
            )
        ];
    }

}
