# webpack 学习
### 总结
1. postcss-preset-env  
    原因是postcss-loader这个版本不支持在webpack.config.js文件中这么写          
    解决办法：在项目根目录下新建一个postcss.config.js文件  
    [Invalid options object. PostCSS Loader has been initialized using an options object that does not match the API schema. options has an unknown property 'plugins'. These properties are valid:](https://blog.csdn.net/fankse/article/details/109848346)
2. 打包前清除dist,使用插件 clean-webpack-plugin,注意写法有变化          
    安装
    ```
    yarn add -D clean-webpack-plugin
    ```
    使用
    ```
    const  {CleanWebpackPlugin}=require('clean-webpack-plugin');

    new CleanWebpackPlugin()

    // 错误
    const CleanWebpackPlugin = require("clean-webpack-plugin");
    ```
3. 输入npx webpack server指令后控制台显示成功执行，但是浏览器显示 cannot get/，浏览器控制台显示404  
   ```
    output:{
        filename:'js/[name].js',
        path:resolve(__dirname,'dist'),
        publicPath:'/' 
    },
   ```