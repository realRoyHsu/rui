const babel = require('rollup-plugin-babel');
const clear = require('rollup-plugin-clear');
const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
// const scss = require 'rollup-plugin-scss';
const postcss = require('rollup-plugin-postcss');

const rollup = require('rollup');

const components = require('./path.js');
console.log('Creating an optimized production build...');
async function build (component) {

    const inputOptions = { input: `packages/${component}/index.js` };
    const outputOptions = { output:
        {
            file: `packages/${component}/es/${component}.js`,
            format: 'esm',
            sourceMap: false,
        },
    };
    // create a bundle
    const bundle = await rollup.rollup({
        ...inputOptions,
        // 是否开启代码分割
        experimentalCodeSplitting: true,
        plugins: [
            resolve(),
            commonjs({
                include: 'node_modules/**',
                namedExports: {
                    'node_modules/react/index.js': ['Component', 'PureComponent', 'Fragment', 'Children', 'createElement'],
                },
            }),
            clear({
                targets: ['packages/scrollbar/es'],
                watch: true,
            }),
            babel({
                exclude: '**node_modules/**',
                presets: ['@babel/preset-env', '@babel/preset-react'],
            }),
            postcss({
                plugins: [],
                extract: true,
                // minimize: true,
                // sourceMap: true,
            })
            // scss({ output: 'packages/scrollbar/es/scrollbar.css' })
            // '@babel/plugin-external-helpers', // 这里
        ],
        external: [
            'React',
            'ReactDOM',
            'reactRouterDom',
            'overlayscrollbars',
            'prop-types'
        ],
    });
    // TODO: ROLLUP
    // console.log(bundle.imports); // an array of external dependencies
    // console.log(bundle.exports); // an array of names exported by the entry point
    // console.log(bundle.modules); // an array of module objects

    // generate code and a sourcemap
    // const { code, map } = await bundle.generate(outputOptions);

    // or write the bundle to disk

    await bundle.write(outputOptions);
}
components.forEach((component) => {
    build(component);
});

