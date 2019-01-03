'use strict';

const io = require('socket.io-client');
const socket = io.connect('http://localhost:3000');

socket.on('saved', (data)=>{
  console.log('data from logger', data);
});

socket.on('error', (error) => {
  console.log('uh oh there\'s been an error');}
);

