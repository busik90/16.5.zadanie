const path = require('path');

//webpack.config.js
module.exports = {
    entry: './src/scripts/app.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'app.bundle.js'
    }
};