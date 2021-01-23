/**
 * 入口文件。引入需要的资源。webpack会自动分析依赖并引入打包
 */
import $ from 'jquery';
import './css/index.css';
import './css/index.less'; // 引入样式文件

import './font-icon/iconfont.css'; // 全部兼容性处理。代码体积大
// import './js/index.js';

import initApp from './js/index';

console.log(333444);
initApp();
// 热更新
if (module.hot) {
  module.hot.accept('./js/index.js', () => {
    console.log('./js/index.js ----- 热更新');
    initApp();
  });
}
