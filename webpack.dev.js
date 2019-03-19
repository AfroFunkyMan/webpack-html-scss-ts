const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

module.exports = merge(common, {
    mode: 'development',
    devtool: "inline-source-map",
    devServer: {
<<<<<<< HEAD
        port: 3000,
        host: '0.0.0.0',
=======
>>>>>>> parent of 6f141ea... initial commit
        contentBase: './dist',
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
});
