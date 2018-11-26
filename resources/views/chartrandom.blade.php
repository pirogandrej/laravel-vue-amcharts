@extends('layouts.app')

@section('style')
@endsection

@section('content')

    <h1 class="text-center pb-4">
        Chart.js - линейный график (random-trigger)
    </h1>

    <chartrandom-component></chartrandom-component>

    @include('layouts.vueMenu')

@endsection