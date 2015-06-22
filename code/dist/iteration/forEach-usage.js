'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _forEach = require('./forEach');

var _forEach2 = _interopRequireDefault(_forEach);

var languages = ['JavaScript', 'Ruby', 'C', 'C#', 'Haskell'];

(0, _forEach2['default'])(function (language) {
  return console.log(language);
}, languages);

// JavaScript
// Ruby
// C
// C#
// Haskell