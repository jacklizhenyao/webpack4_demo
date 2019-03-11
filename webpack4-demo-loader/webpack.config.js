/**
 * Created by jack on 2019/3/1.
 */
/**
 * Created by jack on 2019/2/27.
 */

var htmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');//设置路径

module.exports = {//配置正式开始
    entry: './src/app.js',//设置入口
    output: {//设置打包出口
        path: path.resolve(__dirname, 'dist'),//打包文件放在这个目录下
        filename: '[name].bundle.js'//打包文件名
    },
    module: {
        rules: [
            {
                //处理.js文件的，并定义处理规则，排除指定不需要处理的，包括指定处理的文件
                //使用babel-loader处理.js文件
                //option 添加特性转换规则
                test: '/.\.js$/',
                loader: 'babel',
                /*  exclude: [/!*path.resolve(__dirname, 'src/components/exclude/')，*!/
                 path.resolve(__dirname, 'node_modules/')
                 ],*///npm 安装包多的话，使用排除功能，效果明显，排除一些文件，优化打包过程，减少打包时间
                /*  include:'./src/',//打包src下的目录文件*/
                include: [path.resolve(__dirname, 'src/components/')],//path为node.js获取本地原生的绝对路径方法 resolve解析
                //_dirname为当前运行时根目录，
                options: {//在这里使用presets插件可以配合webpack脚本参数 查看presets运行过程
                    presets: ['@babel/preset-env']
                }
            }
            , {
                test: /\.css$/,
                //  loader: 'style-loader!css-loader!postcss-loader',//反顺序读取，先使用css-loader处理css，生成css文件，在通过style加入css文件
                //  loaders: ['style-loader', 'css-loader', 'postcss-loader'],
                use: [
                    /*导入flex.css文件  postcss-loader处理*/
                    /*importLoaders 执行完css-loader后需要之后的几个loader加载css-loader处理好的文件*/
                    'style-loader',
                    {loader: 'css-loader', options: {importLoaders: 1}},
                    {//postcss-loader 插件众多 可以去网站下载
                        loader: 'postcss-loader', options: {
                        plugins: [
                            require('autoprefixer')({
                                browsers: ['last 5 versions']
                            })
                        ]
                    }
                    }
                ]
            },
            {
                /*处理.less文件*/
                test: /\.less$/,
                use: [
                    'style-loader',
                    {loader: 'css-loader'},
                    {//postcss-loader 插件众多 可以去网站下载
                        loader: 'postcss-loader', options: {
                        plugins: [
                            require('autoprefixer')({
                                browsers: ['last 5 versions']
                            })
                        ]
                    }
                    },
                    'less-loader'
                ]
            }
            , {
                test: /\.html$/,//处理html文件 处理模板文件
                use: [
                    'html-loader'
                ]
            }, {
                test: /\.ejs$/,
                use: [
                    'ejs-loader'//处理ejs文件模板语法
                ]
            },
            {
                test: /\.tpl$/,
                use: [
                    'ejs-loader'//处理ejs文件模板语法
                ]
            }, {
                test: /\.(png|gif|jpg|svg)$/i,//i不区分大小写
                use: [
                    /*name 设置图片输出路径*/
                    /*{loader: 'file-loader', options:{name: 'assets/[name]-[hash:5].[ext]'}}*/
                    /*limit 当前要处理图片的最大值，小于最大限制，直接转为base64，图片超出最大限制，直接丢给file-loader处理*/

                    {
                        loader: 'url-loader', options: {
                        name: 'assets/[name]-[hash:5].[ext]',
                        limit: 1000
                    }
                    },
                    {loader: 'image-webpack-loader'}
                ]
            }
        ]
    }
    ,
    plugins: [new htmlWebpackPlugin(
        {
            filename: 'index-[hash].html',//模板输出文件的名字
            template: 'index.html',//指定的模板  模板文件的绝对路径
            inject: 'body'//打包后的js文件放入模板文件的body标签中
        }
    )],//插件 相关配置
    //mode: 'development'//设置模式为开发者模式
    mode: 'development'
}
;
