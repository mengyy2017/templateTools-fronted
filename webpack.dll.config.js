const webpack = require('webpack')
const path = require('path')
const cwd = process.cwd()
const basePath = "./src/"

module.exports = {
    entry: {
        vendor: ['react', 'react-dom', 'react-redux', 'redux-thunk', 'antd', 'rc-cascader',
            'react-router-dom', 'redux', 'lodash','rc-animate', 'draft-js', 'core-js', 'axios']
    },
    output: {
        path: path.join(cwd, basePath),
        filename: "[name].dll.js",
        library: "[name]_library"
    },
    plugins: [
        new webpack.DllPlugin({
            path: path.join(cwd, basePath, 'manifest-[name].json'),
            name: '[name]_library'
        })
    ]
}