const path = require('path');

module.exports = () => {
    return {
        module: {
            rules: [
                {
                    test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                    type: 'public/images',
                },
                {
                    test: /\.ts$/,
                    exclude: /node_modules/,
                    use: ['cache-loader', 'babel-loader'], 
                    include: path.resolve('src'),
                }
            ],
        },
    }
};