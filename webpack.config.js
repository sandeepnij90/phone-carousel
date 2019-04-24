const webpack = require('webpack');
const path = require('path');
const extractTextPlugin = require('extract-text-webpack-plugin');
const extractPlugin = new extractTextPlugin({
    filename: 'index.css'
});
const htmlPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }]
            },
            {
                test: /\.scss$/,
                use: extractPlugin.extract({
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test:/\.css$/,
                use:['style-loader', 'css-loader']
            },
            {
                test: /\.(jpg|png)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'img/'
                    }
                }]
            },
            {
                test: /\.html$/,
                use: ['html-loader']
            }
        ]
    },
    plugins: [
    extractPlugin,
        new htmlPlugin({
            template: 'src/index.html'
        })
    ]
}