const path = require('path');

const getOptimization = require('./config/webpack/webpack.config.optomization');
const getRules = require('./config/webpack/webpack.config.rules');
const getPlugins = require('./config/webpack/webpack.config.plugins');

module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/index.ts'),
    },
    
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
    },

    devtool: 'source-map',

    ...getOptimization(),
    
    ...getRules(),

    ...getPlugins()
}