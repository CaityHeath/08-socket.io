'use strict';

const io = require('socket.io')(3000);
//const socket = io.connect('http://localhost:3000');

require('./logger.js');
const file = require('./app.js');

io.on('connection', socket => {
  console.log('new connection', socket.id);
  io.on('file', file =>{
    socket.emit('read', file);
  });


  socket.on('file-save', () => {
    console.log(file);
    socket.emit('saved', file);
  });

  socket.on('file-error', () =>{
    console.log(file);
    socket.emit('error', file);
  });
});
