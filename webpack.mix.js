const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.postCss('resources/css/tw.css', 'public/css', [
        require('tailwindcss'),
    ])
    .js('resources/pier-editor/index.js', 'public/js/pier-editor.js')
    .js('resources/pier-cms/index.js', 'public/js/pier-cms.js')
    .sass('resources/sass/app.scss', 'public/css');
