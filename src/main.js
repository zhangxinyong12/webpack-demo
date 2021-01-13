import 'core-js/modules/es.object.to-string.js';
import 'core-js/modules/es.promise.js';
import 'core-js/modules/web.timers.js';

/* eslint-disable */
import 'core-js/modules/es.object.to-string.js';


/**
 * 入口文件。引入需要的资源。webpack会自动分析依赖并引入打包
 */

import './css/index.css';
import './css/index.less'; // 引入样式文件

import './font-icon/iconfont.css'; // 全部兼容性处理。代码体积大
// import './js/index.js';

require('./js/index.js');

var p = new Promise(function (resolve) {
  setTimeout(function () {
    console.log('promise---');
    resolve('22');
  }, 3000);
});
p.then(function () {});