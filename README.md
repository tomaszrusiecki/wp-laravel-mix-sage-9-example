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
"build": "mix",
"build:production": "mix --production",
"watch": "mix watch"
```

`app/helpers.php`
```php
function asset_path($asset)
{
    $assets = sage('assets');

    return $assets->dist . $assets->get('/' . $asset);
}
```