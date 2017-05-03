
var webpack = require('webpack');

module.exports = {
    // 가장 청므 읽을 스크립트 파일
    // 여기서부터 import 되어있는 다른 스크립트를 불러온다.
    entry: [
        './src/index.js',
        'webpack-dev-server/client?http://0.0.0.0:3001',
        'webpack/hot/only-dev-server'
    ],

    // 파일을 합치고 ./public/bundle.js에 저장한다.
    output: {
        path: '/',
        filename: 'bundle.js'
    },

    // ES6 문법과 JSX 문법을 사용한다.

    devServer: {
        hot: true,
        filename: 'bundle.js',
        publicPath: '/',
        historyApiFallback: true,
        contentBase: './public',
        proxy: {
            "**": "http://localhost:3000"
        }
    },

    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ],

    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['react-hot-loader', 'babel-loader?' + JSON.stringify({
                    cacheDirectory: true,
                    presets: ['es2015', 'react']
                })],
                exclude: /node_modules/,
            }
        ]
    }
    // 이 부분으로 설정시 안됨. 잘 모르겠음 ㅠㅠㅠ
    // module: {
    //     loaders: [
    //         {
    //             test: /\.js$/,
    //             loader: 'babel-loader',
    //             exclude: /node_modules/,
    //             query: {
    //                 cacheDirectory: true,
    //                 presets: ['es2015', 'react'],
    //                 plugins: ["react-hot-loader/babel"]
    //             }
    //         }
    //     ]
    // }
};