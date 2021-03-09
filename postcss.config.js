const Autoprefixer = require('autoprefixer');
const CssNano = require('cssnano');

module.exports = {
    syntax: 'postcss-scss',
    plugins: [
        {
            'postcss-preset-env': {
                browsers: 'last 2 versions',
            }
        },
        Autoprefixer,
        CssNano({
            preset: ['default', {
                reduceIdents: false,
                discardUnused: { fontFace: false },
                discardComments: { removeAll: true }
            }]
        })
    ]
}