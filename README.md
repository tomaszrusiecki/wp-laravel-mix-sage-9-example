# [Laravel Mix](https://laravel-mix.com) settings for [Sage 9](https://github.com/roots/sage/tree/9.0.10) ([roots.io](https://roots.io))

Installation
------------
```
npm install laravel-mix laravel-mix-clean --save-dev
```

`webpack.mix.js`
```
...
  proxy: {
    target: 'YOUR_LOCAL_URL',
  },
...
````

`package.json`
```
"build": "cross-env NODE_ENV=development node_modules/webpack/bin/webpack.js --config=node_modules/laravel-mix/setup/webpack.config.js",
"build:production": "cross-env NODE_ENV=production node_modules/webpack/bin/webpack.js --config=node_modules/laravel-mix/setup/webpack.config.js",
"watch": "npm run build -- --watch"
```

`app/helpers.php`
```php
function asset_path($asset)
{
    $assets = sage('assets');

    return $assets->dist . $assets->get('/' . $asset);
}
```