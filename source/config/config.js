const path = require('path');

module.exports = {
    outputDir: '..',
    styleguideDir: 'docs',
    sourceDirectories: [
        'components',
    ],
    sourceFiles: [
        'consts',
    ],
    externalDependencies: [
        'react',
        'react-dom',
        'prop-types',
        'styled-components',
        'polished',
    ],
};
