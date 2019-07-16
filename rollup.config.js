import babel from 'rollup-plugin-babel';
import clear from 'rollup-plugin-clear';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import scss from 'rollup-plugin-scss';

// rollup.config.js
export default {
    input: 'packages/index.ts',
    output: {
        file: 'packages/scrollbar/es/scrollbar.js',
        format: 'es',
        sourceMap: true,
        // entryFileNames: '[name]/index.js',
        // exports: 'named',
    },
    // 是否开启代码分割
    experimentalCodeSplitting: true,
    // 需要引入的插件
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
            exclude: '**/node_modules/**',
            presets: ['@babel/env', '@babel/preset-react'],
        }),
        scss({
            output: 'packages/scrollbar/es/scrollbar.css',
        }) // will output compiled styles to bundle.css
        // '@babel/plugin-external-helpers', // 这里
      ],
    external: [
        'React',
        'ReactDOM',
        'reactRouterDom',
        'overlayscrollbars',
        'prop-types'
    ],
    // globals: {
    //     react: 'React',
    // },
  };
