const path = require('path');

const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  watch: true,
  watchOptions: {
   aggregateTimeout: 600,
   ignored: /node_modules/,
   poll: 500
  },
  module: {
   rules: [
     // ... other rules
     {
       test: /\.vue$/,
       loader: 'vue-loader'
     },
     {
      test: /\.exec\.js$/,
      loader: 'script-loader'
     },
     {
      test: /\.s[ac]ss$/i,
      use: [
        // Creates `style` nodes from JS strings
        'style-loader',
        // Translates CSS into CommonJS
        'css-loader',
        // Compiles Sass to CSS
        'sass-loader',
      ],
     },
     {
      test: /\.css$/i,
      use: [
        // The `injectType`  option can be avoided because it is default behaviour
        { loader: 'style-loader', options: { injectType: 'styleTag' } },
        'css-loader',
      ],
    },
     
     
   ]
  },
  plugins: [
  // make sure to include the plugin!
   new VueLoaderPlugin()
  ],
  resolve: {
   alias: {
     'vue$': 'vue/dist/vue.esm.js' // 'vue/dist/vue.common.js' for webpack 1
  },
 }
};