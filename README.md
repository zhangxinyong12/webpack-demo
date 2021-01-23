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
4. 缓存
   - babel   
    cacheDirectory:true
   - 文件资源缓存   
      - hash: 每次webpack构建时会生成一个唯一的hash值，问题：因为js和css同时使用一个hash值，重新打包，会导致所有资源缓存失效。   
      - chunkhash:根据chunk生成hash值。如果打包来源同一个chunk，那么hash值就一样。css是在js中引入的，所有同属于一个chunk
      - contenhash：根据文件的内容生成hash，不同文件hash值一定不一样。  
5. 懒加载 预加载
    - 懒加载  当文件需要使用的时候才加载，文件大的时候，第一次使用的时候会有延迟
        ```
        const addEle= document.querySelector('#add');
        addEle.addEventListener('click',()=>{
            import(/* webpackChunkName:'add' */'./add.js').then((mul)=>{
            console.log(mul.onAddNumber(1,2));
            })
        })
        ```
    - prefetch 预加载 会在使用前提前加载，其他资源加载完毕，浏览器空闲的时候 
        ```
        const addEle= document.querySelector('#add');
        addEle.addEventListener('click',()=>{
            import(/* webpackChunkName:'add',webpackPrefetch:true */'./add.js').then((mul)=>{
            console.log(mul.onAddNumber(1,2));
            })
        })
            
        ```
        ```
            <link rel="prefetch" as="script" href="/js/add.js">
        ```
    

