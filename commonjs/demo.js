const { add, multiple, divide, minus, mod } = require('./module.js')
const _ = require('lodash')
const sum = add(12, 34);
const result = multiple(12, 34);
console.log(sum);
console.log(result);
const arr = _.concat([1, 2], 3)
console.log('arr...', arr);