'use strict';

var fs        = require('fs');
var path      = require('path');
var basename  = path.basename(module.filename);
var util = require('util')

var db  = {};

var controllers = {};

function loadModule(filename) {
  var current_module;

  try {
    current_module = require(filename);
  }
  catch(e) {
    throw 'Unable to load ' + filename + ": " + e;
  }

  return current_module;
}


function functionName(fun) {
  var ret = fun.toString();
  ret = ret.substr('function '.length);
  ret = ret.substr(0, ret.indexOf('('));
  return ret;
}


fs.readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    var loadedFile = loadModule('./'+file);
    var loadedFilePrototype = loadedFile.prototype

    if(file.indexOf('controller') > -1 && loadedFilePrototype){
      var controllerName = functionName(loadedFile);
      controllers[controllerName] = new loadedFile()
      console.log(controllerName)
      console.log(file + ' - ' + Object.keys(loadedFilePrototype));
    }

  });

console.log(controllers)
module.exports = db;
