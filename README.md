# webpack 学习
### 报错
- postcss-preset-env  
原因是postcss-loader这个版本不支持在webpack。config。js文件中这么写          
解决办法：在项目根目录下新建一个postcss.config.js文件  
 [Invalid options object. PostCSS Loader has been initialized using an options object that does not match the API schema. options has an unknown property 'plugins'. These properties are valid:](https://blog.csdn.net/fankse/article/details/109848346)