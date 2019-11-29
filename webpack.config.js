const webpack = require('webpack')
const path = require('path')
const cwd = process.cwd()
const basePath = "./src/"
const ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = {

    entry: './main.js', // 入口文件路径

    output: {
        path: path.join(cwd,basePath),
        publicPath: "src",
        filename: 'index.js',
        // chunkFilename: '[name].chunk.js'
    },

    devServer: {
        contentBase: "."
    },

    module: {
        rules:  [
            {
                test: /\.js?$/,
                //exclude: /node_modules/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    // loader: 'babel-loader?presets[]=react,presets[]=es2015',
                    // options: {
                    //     cacheDirectory: true
                    // }
                    options: {
                        presets: [["es2015", {"modules": false}], "stage-0", "react"],
                        plugins: [["transform-runtime"]]
                    }
                }
            },
            {
                test: /\.less$/,
                // loader: 'style-loader!css-loader!less-loader'
                // options: {javascriptEnabled: true }
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader", options: {javascriptEnabled: true }// compiles Less to CSS
                }]
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({use: "css-loader",fallback: "style-loader"})
            },
            {
                test: /\.(ttf|eot|svg|woff|woff2)((\?v=[0-9]\.[0-9]\.[0-9])|(\?t=\d+))?$/,
                loader: "file-loader?name=[name].[ext]"
            }
        ]
    },

    resolve: {
        extensions: ['*', '.js', '.jsx', '.json'],
        alias: {
            "styles": path.join(cwd, basePath + "styles"),
            "actions": path.join(cwd,basePath + "actions"),
            "constants": path.join(cwd, basePath + "constants"),
            "images": path.join(cwd, basePath + "images"),
            "reducers": path.join(cwd, basePath + "reducers"),
            "stores": path.join(cwd, basePath + "stores"),
            "components": path.join(cwd, basePath + "components"),
            "routes": path.join(cwd, basePath + "routes"),
            "utils": path.join(cwd, basePath + "utils"),
        }
    },

    plugins: [
        new ExtractTextPlugin({filename: 'common.css', allChunks: true}),
        new webpack.DllReferencePlugin({
            context: path.join(cwd, basePath),
            manifest: require('./src/manifest-vendor.json')
        }),
        new webpack.DefinePlugin({
            SYSTEM_SERVER_URL: JSON.stringify('http://127.0.0.1:8040'),
            TEMPLATE_SERVER_URL: JSON.stringify('http://127.0.0.1:8042'),
            SPIDER_SERVER_URL: JSON.stringify('http://127.0.0.1:8043'),

            // SYSTEM_SERVER_URL: JSON.stringify('http://127.0.0.1:8888/SYSTEM-SERVER'),
            // TEMPLATE_SERVER_URL: JSON.stringify('http://127.0.0.1:8888/TEMPLATE-SERVER'),
            // SPIDER_SERVER_URL: JSON.stringify('http://127.0.0.1:8888/SPIDER-SERVER'),

            // SYSTEM_SERVER_URL: JSON.stringify('http://127.0.0.1:9999/SYSTEM-SERVER'),
            // TEMPLATE_SERVER_URL: JSON.stringify('http://127.0.0.1:9999/TEMPLATE-SERVER'),
            // SPIDER_SERVER_URL: JSON.stringify('http://127.0.0.1:9999/SPIDER-SERVER'),

            WEB_URL: JSON.stringify('http://127.0.0.1:8020/#')
        })
    ],

    // optimization: {
    //     splitChunks: {
    //         cacheGroups: {
    //             common: {
    //                 name: "common",
    //                 chunks: "all",
    //                 priority: 2,
    //                 minChunks: 2,
    //             },
    //         }
    //     }
    // },

    performance: {
        hints: false
    }

}