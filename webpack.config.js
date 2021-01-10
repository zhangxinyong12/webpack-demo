/**
 * loader 1.下载 2.使用（ 配置 loader）
 * plugins 1.下载 2.引入 3.使用
 */

const {resolve}=require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports={
    // 模式 开发模式
    mode:'development',
    // 入口
    entry:'./src/main.js',
    // 出口
    output:{
        filename:'main.js',
        path:resolve(__dirname,'dist'),
        publicPath:'./' // 因为打包资源后不能解析“./”之类的路径，需要通过publicPath配置
    },
    // loader 配置
    module:{
        rules:[
            { 
                // 匹配那些文件 正则
                test:/\.css$/,
                // 使用那些loader
                use:[
                    // use数组中的loader执行顺序；从右到左 从下到上
                    // 创建style标签 将js中的样式资源插入到head中生效
                    'style-loader',
                    // 将css文件变成commonjs模块加载js中里面内容都是样式字符串
                    'css-loader'
                ]
            },
            {
                test:/\.less$/,
                use:[
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                // 处理图片资源
                test:/\.(jpg|png|gif)$/,
                // 使用一个loader 
                // 下载 url-loader file-loader
                loader:'url-loader',
                options:{
                    // 图片大小 小于8kb使用baser64处理
                    // 优点：减少请求数量（减轻服务器压力）
                    // 缺点：图片体积变大（文件请求速度变慢）
                    limit:8*1024,
                    // url-loader默认使用es6模块解析 html-loader引入图片使用commonjs
                    // 关闭url-loader es6模块
                    esModule:false,
                    // [hash:10]取图片hash前10位 [ext]原来的文件的扩展名
                    name:'[hash:10].[ext]'
                }
            },
            {
                // 处理html文件的img图片（引入img从而被url-loader进行处理）
                test:/\.html$/,
                loader:'html-loader'
            },
            {
                // 其他资源
                test:/\.(ttf|svg|woff|eot)$/,
                // 排除某些资源
                // exclude:/\.(css|less|scss|js|html|jpg|png|gif)$/,
                loader:'file-loader',
                options:{
                    name:'[hash:10].[ext]'
                }
            }
        ]
    },
    // plugins
    plugins:[
        // html-webpack-plugin
        // 默认会创建一个空的HTML,自动引入打包输出的所有资源，无需再手动引入
        new HtmlWebpackPlugin({
            // 使用模板文件
            template:'./src/index.html'
        })
    ]
}