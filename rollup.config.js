import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import buble from '@rollup/plugin-buble';
import replace from '@rollup/plugin-replace';
import { terser } from 'rollup-plugin-terser';
import copy from 'rollup-plugin-copy';

import pkg from './package.json';

export default [
  {
    input: 'index.js',
    output: {
      file: pkg.browser,
      format: 'umd',
      name: 'mixCssColor'
    },
    plugins: [
      resolve(),
      commonjs(),
      buble(),
      replace({ __VERSION__: `v${pkg.version}` }),
      terser(),
      copy({
        targets: [
          {
            src: 'index.d.ts',
            dest: 'dist',
          }
        ]
      })
    ]
  },
  {
    input: 'index.js',
    external: [
      'parse-css-color',
      'pure-color/convert/hsl2rgb',
      'pure-color/convert/rgb2hex',
      'pure-color/convert/rgb2hsl'
    ],
    plugins: [resolve(), commonjs(), replace({ __VERSION__: `v${pkg.version}` })],
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' }
    ]
  }
];
