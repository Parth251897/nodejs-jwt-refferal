var decimalAdjust = require('decimal-adjust');

var floor = function(value, exp) {
  return decimalAdjust('floor', value, exp);
};

module.exports = floor;