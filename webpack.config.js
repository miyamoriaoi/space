var path = require('path');

var config = {
    entry: [path.resolve(__dirname, 'app/js/main.jsx')],
    output: {
        path: path.resolve(__dirname, './dist/'),
        filename: 'space.js'
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                  presets: ['es2015', 'react']
                }
            }
        ],
        resolve: {
            extensions:['','.js','.jsx']
        },
    }
};

module.exports = config;
