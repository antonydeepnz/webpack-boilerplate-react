const TerserPlugin = require('terser-webpack-plugin');

module.exports = () => ({
    optimization: {
        minimize: true,
        // splitChunks: {
        //     cacheGroups: {
        //         native: {
        //             name: 'native',
        //             chunks: ({ name }) => name === 'native',
        //             enforce: true,
        //             priority: 0
        //         },
        //         vendors: {
        //             name: 'vendors',
        //             test: ({ context }) => context.includes('node_modules') && !context.includes(commonPackagesScopeName),
        //             chunks: ({ name }) => name !== 'native',
        //             enforce: true,
        //             priority: -1
        //         },
        //         common: {
        //             test: ({ context }) => context.includes(commonPackagesScopeName),
        //             chunks: ({ name }) => name !== 'native',
        //             name: 'common',
        //             enforce: true,
        //             priority: -2
        //         },
        //         application: {
        //             test: ({ context }) => !context.includes('node_modules'),
        //             name: 'application',
        //             chunks: ({ name }) => name === 'application',
        //             enforce: true,
        //             priority: -3
        //         }
        //     }
        // },
        minimizer: [
            new TerserPlugin({
                extractComments: true,
                parallel: true,
                terserOptions: {
                    sourceMap: true,
                    // compress: {
                    //     global_defs: {
                    //         "@console.log": "alert"
                    //     },
                    //     passes: 2
                    // },
                },
            })
        ]
    }
});
