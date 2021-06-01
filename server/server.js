const express = require('express')
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)

const port = 3333;

//server 
http.listen(port, function(){
  console.log('listening on :', port)
})

// io
io.on('connection', function(socket){
    
    // on connect
    console.log('connected', socket.id)
    // socket.emit("get-socket-connected");

    // on data
    socket.on('motor-data', function(data) {
        console.log('received : ', data)
    })

    // on disconnect
    socket.on('disconnect', function() {
        console.log('disconnect', socket.id)
    })
})
