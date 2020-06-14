const webpack = require('webpack');
const path = require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    /** 入口 */
    entry: ['react-hot-loader/patch', path.join(__dirname, 'src/index.js')],
    /**输出到dist文件夹，输出文件名字为bundle.js */
    output: {
        path: path.join(__dirname, './dist'),
        filename: '[name].[hash].js',
        chunkFilename: '[name].[chunkhash].js'
    },
    module: {
        rules: [{
            /**src文件夹下面的.js结尾的文件，要使用 */
            /** cacheDirectory是用来缓存编译结果，下次编译加速*/
            test: /\.js$/,
            use: ['babel-loader?cacheDirectory=true'],
            include: path.join(__dirname, 'src')
        },
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        },
        {
            test: /\.(png|jpg|gif)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 8192 //小于8K的图片会被转成base64图片，直接插入HTML中，减少HTTP请求
                }
            }]
        }
        ]
    },
    devServer: {
        port: 3000,
        contentBase: path.join(__dirname, './dist'),
        historyApiFallback: true,
        host: '0.0.0.0'
    },
    resolve: {
        alias: {
            pages: path.join(__dirname, 'src/pages'),
            components: path.join(__dirname, 'src/components'),
            router: path.join(__dirname, 'src/router'),
            actions: path.join(__dirname, 'src/redux/actions'),
            reducers: path.join(__dirname, 'src/redux/reducers')
        }
    },
    // plugins: [new HtmlWebpackPlugin({
    //     filename: 'index.html',
    //     template: path.join(__dirname, 'src/index.html')
    // })]

}