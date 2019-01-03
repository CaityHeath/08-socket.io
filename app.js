'use strict';

const fs = require('fs');
const util = require('util');
const events = require('./events.js');
//const logger = require('./logger.js');


let read = util.promisify(fs.readFile);
let write = util.promisify(fs.writeFile);
let file = process.argv.slice(2).shift();


const alterFile = (file) => {
  read(file)
    .then( (data) => {
      let text = data.toString().toUpperCase();
      console.log(text);
      write(file, Buffer.from(text))
        .then(() => {
          console.log(file);
          console.log(`${file} saved`);
        })
        .catch(error => events.emit('error'));
    })
    .catch(error => events.emit('error'));
};

alterFile(file);