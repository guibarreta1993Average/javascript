module.exports = {
    entry: ['@babel/polyfill','./39-EcmaScript-Adicionar_repositorios/src/main.js'],
    output:{
        path: __dirname + '/39-EcmaScript-Adicionar_repositorios',
        filename: 'bundle.js',
    },
    devServer:{
        contentBase: __dirname + '/39-EcmaScript-Adicionar_repositorios/public'
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