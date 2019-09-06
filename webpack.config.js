module.exports = {
    entry: ['@babel/polyfill','./42-EcmaScript-Loading_e_erro/src/main.js'],
    output:{
        path: __dirname + '/42-EcmaScript-Loading_e_erro',
        filename: 'bundle.js',
    },
    devServer:{
        contentBase: __dirname + '/42-EcmaScript-Loading_e_erro/public'
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