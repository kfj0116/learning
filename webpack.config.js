var webpack = require('webpack');
var path = require('path');

module.exports = {
    //页面入口文件配置
    entry: {
        index: [
            'webpack-dev-server/client?http://localhost:5000',
            'webpack/hot/only-dev-server',
            './js/entry.js'
        ]
    },
    //入口文件输出配置
    output: {
        path: __dirname + '/assets/',
        filename: 'bundle.js'
    },
    module: {
        //加载器配置
        loaders: [
            /*{
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },

            //{ test: /\.scss$/, loader: 'style!css!sass?sourceMap'},
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192'
            },

            {
                test: /\.js|jsx$/, loaders: ['babel?presets[]=es2015,presets[]=react,presets[]=stage-0']
            },
            {
                test: /\.js$/,
                loader: 'jsx-loader'
            },*/
            {
                test: /\.js|jsx$/,
                loaders: ['react-hot-loader', 'babel-loader?presets[]=es2015,presets[]=react,presets[]=stage-0'],
                include: path.join(__dirname, 'js')
            }
        ]
    }
    ,
    //插件项
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};