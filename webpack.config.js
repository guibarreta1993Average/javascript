module.exports = {
    entry: './33-EcmaScript-Import_Export/main.js',
    output:{
        path: __dirname,
        filename: '33-EcmaScript-Import_Export/bundle.js',
    },
    module:{
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ]
    }
};