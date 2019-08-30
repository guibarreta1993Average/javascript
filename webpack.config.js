module.exports = {
    entry: './32-EcmaScript-WebPack/main.js',
    output:{
        path: __dirname,
        filename: '32-EcmaScript-WebPack/bundle.js',
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