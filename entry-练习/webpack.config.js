const {resolve}=require('path');
const HtmlWebpackPlugin= require('html-webpack-plugin');

module.exports={
    mode:'development',
    // entry:'./src/index.js',
    entry:{ // 多入口
        add:'./src/add.js',
        count:'./src/count.js',
        index:'./src/index.js',
    },
    output:{
        filename:'[name].js',
        path:resolve(__dirname,'build')
    },
    plugins:[
        new HtmlWebpackPlugin()
    ]
};