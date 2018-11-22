const mix = require('laravel-mix');

mix.js('resources/js/app.js', 'public/js')
   .sass('resources/sass/app.scss', 'public/css');

mix
    .styles([
            'public/css/app.css',
            'public/css/custom.css'
        ],
        'public/css/all.css')

    .scripts([
            'public/js/app.js',
            'public/js/custom.js'
        ],
        'public/js/all.js')

    .version();




