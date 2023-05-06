const path = require('path')

const postCSSPlugins = [
    require('postcss-simple-vars'),
    require('postcss-nested'),
    require('autoprefixer')
]

module.exports = {
    entry: './app/assets/scripts/App.js',
    mode: 'development',
    output: {
        filename: 'bundled.js',
        path: path.resolve(__dirname, 'app')
    },
    watch: true,
    module: {
       rules: [
        {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader', {loader: 'postcss-loader', options: {postcssOptions: {plugins: postCSSPlugins}}}]
        }
       ] 
    }
}