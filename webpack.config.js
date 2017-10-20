const webpack = require('webpack'),
    htmlWebpackPlugin = require('html-webpack-plugin'),
    path = require('path');

module.exports = {
    entry: './webpack_ejs/html.js',
    output: {
        path: path.resolve(__dirname, './webpack_ejs/dist'),
        filename: './webpack_ejs/js/[name]-[chunkhash].js',
    },
    module: { //loader第三种使用方式 配置项设置 其他1引入 2cli
        loaders: [
            { test: /\.js$/,loader: "babel-loader" },
            { //解析 .html
                test: /\.html$/,
                loader: 'html-loader'
            },{ //解析 .ejs
                test: /\.ejs$/,
                loader: 'ejs-loader'
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve('./webpack_ejs/html.js'),
            inject: 'body'
        }),
        new webpack.LoaderOptionsPlugin({ //浏览器加前缀
            options: {
                postcss: [require('autoprefixer')({browsers:['last 5 versions']})]
            }
        }),
    ]
};