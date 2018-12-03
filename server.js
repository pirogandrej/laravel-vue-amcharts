// var express = require('express');
// var appExpress = express();
// var server = require('http-server').Server(appExpress);
// var io = require('socket.io')(server);
// var log4js = require('log4js');
// var logger = log4js.getLogger();
//
// logger.debug('Script has been started...');
//
// server.listen(3000, function(){
//     console.log('listening on *:3000');
// });
//
// appExpress.get('/', function(req, res){
//     res.send('<h1>Hello world</h1>');
// });
//
// // const __dirname = "";
// // appExpress.use(express.static(__dirname + '/public/svg'));


var io = require('socket.io')(6001);

var dataCustom = [
    {
        "object": "A",
        "value": 1
    },
    {
        "object": "B",
        "value": 201
    },
    {
        "object": "C",
        "value": 65
    },
    {
        "object": "D",
        "value": 39
    },
    {
        "object": "E",
        "value": 19
    },
    {
        "object": "F",
        "value": 191
    },
    {
        "object": "G",
        "value": 16
    },
    {
        "object": "H",
        "value": 55
    },
    {
        "object": "I",
        "value": 44
    },
    {
        "object": "K",
        "value": 100
    }
];

io.on('connection', function (socket) {

    console.log('New connection!',socket.id);

    socket.emit('server-info', JSON.stringify(dataCustom));

    socket.on('message', function (data) {
        if(data == 'getdata'){
            console.log('server init = ', data);
            socket.emit('server-info', JSON.stringify(dataCustom));
        }
        else{
            console.log('server send new data json = ', data);
            dataCustom = JSON.parse(data);
            console.log('server take = ', dataCustom);
            socket.broadcast.send(JSON.stringify(dataCustom));
        }
    });

});

