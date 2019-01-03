'use strict';

const io = require('socket.io')(3000);
//const socket = io.connect('http://localhost:3000');

require('./logger.js');
const file = require('./app.js');

io.on('connection', socket => {
  console.log('new connection', socket.id);
  io.on('file', file =>{
    socket.broadcast.emit('read', file);
  });


  socket.on('file-save', () => {
    socket.broadcast.emit('saved', file);
  });

  socket.on('file-error', () =>{
    socket.broadcast.emit('error', file);
  });
});
