module.exports = {
    entry:  {
        javascript: './src/js/amazon.js',
        html:       './public/index.html'
    },
    output: {
        filename: 'amazon.js',
        path:   __dirname + '/dev'
    },
    module: {
        loaders:[
            {
                test:    /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['react-hot','babel']
            },
            {
                test:   /\.html$/,
                loader: 'file?name=[name].[ext]'
            },
            {
                test:    /\.css$/,
                loader: 'style-loader!css-loader'
            }
        ]
    }
};
