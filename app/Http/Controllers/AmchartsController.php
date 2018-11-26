<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AmchartsController extends Controller
{
    public function index()
    {
        return view('amchart');
    }

    public function newEvent(Request $request){
        $result = array(
            array(
                "object" => "Azzurra1",
                "value" => 100
            ),
            array(
                "object" => "Azzurra2",
                "value" => 200
            ),
            array(
                "object" => "Azzurra3",
                "value" => 300
            ),
            array(
                "object" => "Azzurra4",
                "value" => 400
            )
        );

    }


    public function chartrandom(){

        return view('chartrandom');

    }

    public function chartDataRandom(){
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
