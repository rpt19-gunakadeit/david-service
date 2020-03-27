const path = require('path');
const SRC_DIR = path.join(__dirname, '/client/src/components');
const DIST_DIR = path.join(__dirname, '/public/dist');

module.exports = {
    mode: "production",
    //devtool: 'none', 
    entry: `${SRC_DIR}/Description.jsx`,
    output: {
        filename: 'bundle.js',
        path: DIST_DIR,
        libraryTarget: 'var',
        library: 'library'
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                        presets: ['@babel/preset-react', 
                                  '@babel/preset-env']
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }


}