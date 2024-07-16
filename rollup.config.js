
import commonjs from '@rollup/plugin-commonjs'
import dts from 'rollup-plugin-dts'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import resolve from '@rollup/plugin-node-resolve'
import scss from 'rollup-plugin-scss'
import terser from '@rollup/plugin-terser'
import typescript from '@rollup/plugin-typescript'

const packageJson = require('./package.json')

const config = [
  {
    input: 'src/imports.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
      }),
      terser(),
      scss({
        failOnError: true,
        fileName: 'style.css',
        include: ['src/styles/*.scss'],
        output: true,
        runtime: require('sass'),
      }),
    ],
    external: ['react', 'react-dom'],
  },
  {
    input: 'src/imports.ts',
    output: [
      {
        file: packageJson.types,
        format: 'es'
      }
    ],
    plugins: [dts.default()],
  },
]

export default config
