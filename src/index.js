const _ = require('lodash');

function pairs(items) {
  return _.chunk(items, 2);
}

module.exports = { pairs };
