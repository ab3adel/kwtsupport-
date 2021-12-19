const path = require('path');
const fs = require('fs');
const util = require('util');

fs.readFile(path.join(__dirname, './dist/server.js'), 'utf8', function (err, data) {
  // fs.readFile(path.join(__dirname, './server.js'), 'utf8', function (err, data) {
  if (err) {
    return console.log(err);
  }
  var stringToBeReplaced = '(window.devicePixelRatio || (window.screen.deviceXDPI / window.screen.logicalXDPI)) > 1';
  var result = data.replace(stringToBeReplaced, 'false');

  // fs.writeFile(path.join(__dirname, './server.js'), result, 'utf8', function (err) {
  fs.writeFile(path.join(__dirname, './dist/server.js'), result, 'utf8', function (err) {
    if (err) return console.log(err);
  });
});
