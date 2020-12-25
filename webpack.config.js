const path = require('path');
const webpack = require('webpack');

module.exports = {
    devServer:{
        publicPath: path.resolve(__dirname, 'static', 'build'),
        port: 5000
    }, 
    entry: {
        app: './index.jsx'
    },
    context: path.resolve(__dirname, 'src'),
    output: {
        path: path.resolve(__dirname, 'static', 'build'),
        filename: 'app.js',
        publicPath: path.resolve(__dirname, 'static', 'build')
    },
    module: {
        rules: [
            { 
                test: /\.jsx?$/,
                include: path.resolve(__dirname, 'src'),
                exclude: path.resolve(__dirname, 'node_modules'),
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/env', '@babel/react'],
                    plugins: ['@babel/plugin-proposal-class-properties']
                }
            }    
        ]
    },
   
};