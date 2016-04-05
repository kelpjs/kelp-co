'use strict';
const co = require('co');
/**
 * [function wrapper]
 * @param  {[function]} gen [generator]
 * @return {[function]}     [middleware]
 */
module.exports = function wrap(gen){
  var fn = co.wrap(gen);
  return function(req, res, next){
    fn.apply(this, arguments).catch(next);
  };
};
