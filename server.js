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
        dataCustom = JSON.parse(data);
        console.log(JSON.parse(data));
        console.log(dataCustom);
        socket.broadcast.send(JSON.stringify(dataCustom));
    });

});

