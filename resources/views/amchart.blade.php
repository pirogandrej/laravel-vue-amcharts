@extends('layouts.app')

@section('content')
<div class="container-fluid">
    <div class="row justify-content-center">
        <div class="col-md-2">

            {{--<menu-component></menu-component>--}}

        </div>
        <div class="col-md-10">

            @foreach($messages as $message)
                <li>
                    <b>{{$message->author}}</b>
                    <p>{{$message->content}}</p>
                </li>
            @endforeach
            <form action="/message" method="POST">
                <input type="text" name="author">
                <br>
                <br>
                {{csrf_field()}}
                <textarea name="content" style="width:100%;height: 50px;"></textarea>
                <input type="submit" value="Send">
            </form>

            {{--<router-view></router-view>--}}

        </div>
    </div>
</div>
@endsection

@section('scripts')
    <script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.2.0/socket.io.js"></script>
    <script>

        var socket = io(':6001');
        socket.on('chat:message', function (data) {
            console.log(data);
        });
    </script>
@endsection