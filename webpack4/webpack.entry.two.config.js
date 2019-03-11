/**
 * Created by jack on 2019/2/28.
 */
/**
 * Created by jack on 2019/2/27.
 */
/*单独指定的webpack配置文件 需要执行webpack --config webpack.dev.config.js 读取这个配置文件*/
const path = require('path');//设置路径
module.exports = {//配置正式开始
    entry: { pageOne:'./src/index.js',pageTwo:'./src/entry2index.js'},//设置入口
    output: {//设置打包出口
        path: path.resolve(__dirname, 'dist'),//打包文件放在这个目录下
        filename: '[name]-[hash].js'//打包文件名 hash为分块chunk的哈希值
    },
    module: {},//loader 相关配置
    plugins: [],//插件 相关配置
    //mode: 'development'//设置模式为开发者模式
    mode: 'development'
};
