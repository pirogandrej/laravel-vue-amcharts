<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AmchartsController extends Controller
{
    public function index()
    {
        return view('amchart');
    }
}
