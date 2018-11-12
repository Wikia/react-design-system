module.exports = {
    babelrc: false,
    exclude: 'node_modules/**',
    plugins: [
        ['@babel/plugin-proposal-class-properties', { loose: true }],
        ['@babel/plugin-proposal-object-rest-spread', { loose: true }],
        '@babel/plugin-transform-object-assign',
        '@babel/plugin-transform-runtime',
    ],
    presets: [
        '@babel/preset-react',
        [
            '@babel/preset-env', {
                modules: false,
                // targets: {
                //     browsers: [
                //         'last 2 versions',
                //         '> 2%',
                //         'IE 11',
                //     ],
                // },
            },
        ],
    ],
};
