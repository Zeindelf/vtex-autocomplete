
const babel = require('rollup-plugin-babel');
const pkg = require('./package');

const now = new Date();
const banner = `
/*!!
 * VtexAutocomplete.js v${pkg.version}
 * https://github.com/${pkg.repository}
 *
 * Copyright (c) 2017-${now.getFullYear()} ${pkg.author.name}
 * Released under the ${pkg.license} license
 *
 * Date: ${now.toISOString()}
 */
`;

module.exports = {
    // Export banner
    banner,
    input: 'src/vtex-autocomplete.js',
    output: [
        {
            banner: banner,
            file: 'dist/vtex-autocomplete.js',
            format: 'umd',
            name: 'VTEX.VtexAutocomplete',
        },
        {
            banner: banner,
            file: 'dist/vtex-autocomplete.common.js',
            format: 'cjs',
        },
        {
            banner: banner,
            file: 'dist/vtex-autocomplete.esm.js',
            format: 'es',
        },
    ],
    plugins: [
        babel({
            exclude: 'node_modules/**',
            plugins: ['external-helpers'],
        }),
    ],
};
