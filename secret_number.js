'use strict';

module.exports = function() {
  var number = 0;
  number = Math.random() * (1000000 - 0);
  return function () {
    return number;
  };
};
