const mix = require('laravel-mix');

require('laravel-mix-clean');

mix.sass('resources/assets/styles/main.scss', 'styles');

mix.js('resources/assets/scripts/main.js', 'scripts');

mix
  .copy('resources/assets/images/**', 'dist/images')
  .copy('resources/assets/fonts/**', 'dist/fonts');

mix.setPublicPath('dist');
mix.options({ processCssUrls: false });

if (mix.inProduction()) {
  mix.clean();
  mix.version();
}

mix.browserSync({
  proxy: {
    target: 'YOUR_LOCAL_URL',
  },
});
