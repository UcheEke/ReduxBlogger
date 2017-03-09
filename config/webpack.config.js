const path = require('path');
let webpack = require('webpack');

module.exports = {
    entry: 'index.js',
    output: {
        path: path.resolve('dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js','.jsx'],
        modules: ['src', 'node_modules'],
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    devServer: {
        contentBase: './'
    }
};
