const {resolve}=require('path');
const MiniCssExtractPlugin= require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin= require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const  {CleanWebpackPlugin}=require('clean-webpack-plugin');
const commonCssLoader=[
    MiniCssExtractPlugin.loader,
    // 'style-loader',
    'css-loader',
    {
        loader:'postcss-loader',
    },
];


module.exports={
    mode:'production',
    entry:'./src/main.js',
    output:{
        filename:'js/main.js',
        path:resolve(__dirname,'dist'),
        publicPath:'./'
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[...commonCssLoader ]
            },
            {
                test:/\.less$/,
                use:[ ...commonCssLoader,    'less-loader'  ]
            },
            {
                test:/\.js$/,
                exclude:/node_modules|main/,
                enforce:'pre', // 优先级
                loader:'eslint-loader',
                options:{
                    fix:true
                }
            },
            {
                test:/\.js$/,
                exclude:/node_modules/,
                loader:'babel-loader',
                options:{
                    presets:[
                        [
                            '@babel/preset-env',
                            {
                                useBuiltIns:'usage',
                                corejs:{version:3},
                                targets:{

                                }
                            }
                        ]
                    ]
                }
            },
            {
                test:/\.(jpg|png|gif)$/,
                loader:'url-loader',
                options:{
                    limit:8*1024,
                    name:'[name].[hash].[ext]',
                    outputPath:'img',
                    publicPath:'./img',
                    esModule:false
                }
            },
            {
                test:/\.html$/,
                loader:'html-loader'
            },
            {
                exclude:/\.(js|css|less|html|jpg|png|gif)$/,
                loader:'file-loader',
                options:{
                    outputPath:'media'
                }
            }
        ]
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename:'css/dist.css'
        }),
        new OptimizeCssAssetsWebpackPlugin(),
        new HtmlWebpackPlugin({
            template:'./src/index.html',
            minify:{
                collapseInlineTagWhitespace:true,
                removeComments:true
            }
        }),
        new CleanWebpackPlugin()
    ]
}