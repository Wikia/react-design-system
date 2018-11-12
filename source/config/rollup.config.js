import glob from 'glob';
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import sass from 'rollup-plugin-sass';
import commonjs from 'rollup-plugin-commonjs';
import string from 'rollup-plugin-string/dist/rollup-plugin-string';

const config = require('./config');
const babelConfig = require('./babel.config');

const TYPES = Object.freeze({
    DIRECTORY: 'DIRECTORY',
    FILE: 'FILE',
});

const sources = [];

// add directories to sources
config.sourceDirectories.forEach(
    // glob only dirs
    directory => glob.sync(`${directory}/*/`, {}).forEach(
        // drop the '/' from the end
        subdir => sources.push({
            name: subdir.substring(0, subdir.length - 1),
            type: TYPES.DIRECTORY,
        })
    )
);

// add files to sources
config.sourceFiles.forEach(
    // glob only files
    directory => glob.sync(`${directory}/*.js`, {}).forEach(
        file => sources.push({
            name: file,
            type: TYPES.FILES,
        })
    )
);

console.log(sources);

// add components to external dependencies so we can reference them in the code
const extenralDependenciesWithComponents = [
    ...config.externalDependencies,
    './colors',
    '../../theme',
    '../Button',
    // ...sources.map(source => `${source}/index.js`),
];

const buildConfig = (fileData) => {
    const inputFile = fileData.type === TYPES.DIRECTORY
        ? `${fileData.name}/index.js`
        : fileData.name;

    const outputFile = fileData.type === TYPES.DIRECTORY
        ? `${fileData.name}.js`
        : fileData.name;

    return {
        input: inputFile,
        output: [
            {
                file: `${config.outputDir}/${outputFile}`,
                format: 'cjs',
            },
        ],
        external: extenralDependenciesWithComponents,
        plugins: [
            string({
                include: 'node_modules/design-system/dist/svg/sprite.svg',
            }),
            resolve({
                module: true,
            }),
            sass({
                output: true,
            }),
            babel(babelConfig),
            commonjs(),
        ],
    };
};

export default sources.map(
    source => buildConfig(source),
);
