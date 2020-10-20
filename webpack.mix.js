const mix = require('laravel-mix');

mix.copy(['resources/assets/image/website'], 'public/assets/image/website')
mix.styles(['resources/assets/css/website.css'],'public/assets/css/website.css')
mix.styles(['resources/assets/js/website.js'],'public/assets/js/website.js')