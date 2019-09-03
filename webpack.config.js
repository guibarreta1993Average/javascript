module.exports = {
    entry: ['@babel/polyfill','./37-EcmaScript-Axios/src/main.js'],
    output:{
        path: __dirname + '/37-EcmaScript-Axios',
        filename: 'bundle.js',
    },
    devServer:{
        contentBase: __dirname + '/37-EcmaScript-Axios/public'
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