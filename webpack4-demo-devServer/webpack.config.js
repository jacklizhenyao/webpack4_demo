/**
 * Created by jack on 2019/3/11.
 */

const path = require('path');
// 提取css的插件
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
    entry: './js/main.js',
    output: {
        filename: 'bundle.js',
        // 将输出的文件都放在dist目录下
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            // you can specify a publicPath here
                            // by default it use publicPath in webpackOptions.output
                            publicPath: '../'
                        }
                    },
                    "css-loader"
                ]
            },
            {
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
                    }
                ]
            }
        ]
    },
    resolve: {
        // modules: ['plugin', 'js']
    },
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ]

    ,
    devServer: {
        open: true,
        port: 8080,
        contentBase: path.join(__dirname, "dist")//设置根目录   配置端口，映射dist文件夹
        , host: '127.0.0.1',//该配置项用于配置 DevServer的服务器监听地址。比如想让局域网的其他设备访问自己的本地服务，则可以在启动DevServer时带上 --host 0.0.0.0.
        //  host的默认值是 127.0.0.1, 下面我们也简单的配置下 host 属性。
        headers: {
            'X-foo': '112233'//该配置项可以在HTTP响应中注入一些HTTP响应头。
        },
        historyApiFallback: true,//该配置项属性是用来应对返回404页面时定向跳转到特定页面的。一般是应用在 HTML5中History API 的单页应用，比如在访问路由时候，访问不到该路由的时候，会跳转到index.html页面。
        hot: true//该配置项是指模块替换换功能，DevServer 默认行为是在发现源代码被更新后通过自动刷新整个页面来做到实时预览的，
        //但是开启模块热替换功能后，它是通过在不刷新整个页面的情况下通过使用新模块替换旧模块来做到实时预览的。
        //"dev": "webpack-dev-server --progress --colors --devtool source-map --hot --inline",
    },
    mode: "development"
};
