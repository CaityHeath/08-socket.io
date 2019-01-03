'use strict';

const events = require('./events.js');

events.on('error', handleError);

function handleError(error){
  console.log('uh oh there\' been an error');
}
