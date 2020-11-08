// 引入其他的模块
// 语法：import xxx from '路径'

// import module1 from './module1';
// import module2 from './module2';
// console.log(module1, module2);

import {foo, bar} from './module1';
import {fun, fun2} from './module2';
import module3 from './module3';
import $ from 'jquery';


$('body').css('background', 'green');

foo();
bar();
fun();
fun2();
module3.foo();