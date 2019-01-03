'use strict';
const io = require('socket.io-client');
const socket = io.connect('http://localhost:3000');

const fs = require('fs');
const util = require('util');
const events = require('./events.js');
require('./logger.js');


let read = util.promisify(fs.readFile);
let write = util.promisify(fs.writeFile);
let file = './text.txt';

// socket.on('read', (file) =>{
//   alterFile(file);
// });

const alterFile = (file) => {
  read(file)
    .then((data) => {
      //console.log(data);
      let text = data.toString().toUpperCase();
      console.log(text);
      write(file, Buffer.from(text))
        .then(text => {
          //console.log(text);
          socket.emit('file-save', text);
        })
        .catch(error => socket.emit('file-error', error));
    });
};

alterFile(file);
