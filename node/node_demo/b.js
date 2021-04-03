const a = require('./a');

console.log(a);
a()

module.exports = function (params) {
  console.log('this is a b.js');
}