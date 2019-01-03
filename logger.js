'use strict';

const io = require('socket.io-client');
const socket = io.connect('http://localhost:3000');

socket.on('read', (file)=>{
  console.log('saved', file);
});

socket.on('error', (error) => {
  console.log('uh oh there\' been an error');}
);

