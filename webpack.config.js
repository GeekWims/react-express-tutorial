module.exports = {
    // 가장 청므 읽을 스크립트 파일
    // 여기서부터 import 되어있는 다른 스크립트를 불러온다.
    entry: './src/index.js',

    // 파일을 합치고 ./public/bundle.js에 저장한다.
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    },

    // ES6 문법과 JSX 문법을 사용한다.
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'bable',
                exclude: /node_modules/,
                query: {
                    cacheDirectory: true,
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
};