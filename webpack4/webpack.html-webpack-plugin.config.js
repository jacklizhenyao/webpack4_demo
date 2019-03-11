/**
 * Created by jack on 2019/2/28.
 */

//引入插件
var htmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');//设置路径

module.exports = {//配置正式开始
    entry: './src/index.js',//设置入口
    output: {//设置打包出口
        path: path.resolve(__dirname, 'dist'),//打包文件放在这个目录下
        filename: 'js/main-[hash].js'//生成的js文件存放在js文件夹下
    },
    module: {},//loader 相关配置
    plugins: [new htmlWebpackPlugin({
        template: './index.html',
        title: 'the title from webpack-plugin parameters',
        date: new Date().getDate()+"",
        author: 'lizhenyao',
        minify:{//代码压缩优化
            removeComments:true,//去掉注释
            collapseWhitespace:true//去掉空格
        }
    })],//插件 相关配置
    //mode: 'development'//设置模式为开发者模式
    mode: 'development'
};
