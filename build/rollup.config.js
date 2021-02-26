import { minify } from 'html-minifier';
import { terser } from "rollup-plugin-terser";
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';

export default {
    input: '../source/main.js',
    output: {
        file: 'bundle.js',
        format: 'es'
    },
    plugins: [
        commonjs(),
        resolve(),
		terser(),
        {
            name: 'minify',
            transform(text, path) {
                if (path.includes('template')) {
                    return minify(text, { minifyCSS: true, minifyJS: true });
                }
            }
        }
    ]
};