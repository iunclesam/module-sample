'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
// 默认暴露 可以暴露任意数据类型 暴露什么数据收到的就是什么数据
// export default value;

/*export default () => {
    console.log('我是默认暴露的箭头函数');
}*/

exports.default = {
    msg: '默认暴露',
    foo: function foo() {
        console.log(this.msg);
    }
};