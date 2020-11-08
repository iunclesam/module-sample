'use strict';

var _module = require('./module1');

var _module2 = require('./module2');

// 引入其他的模块
// 语法：import xxx from '路径'

// import module1 from './module1';
// import module2 from './module2';
// console.log(module1, module2);

(0, _module.foo)();
(0, _module.bar)();
(0, _module2.fun)();
(0, _module2.fun2)();