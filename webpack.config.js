const {resolve, join} = require('path');

function srcPath(subdir=""){
    return join(__dirname, "src", subdir);
}

module.exports = {
    context:resolve(__dirname, "src"),
    entry: "./app.jsx",
    mode: "development",
    output: {
        filename: "bundle.js",
        path: resolve(__dirname, "static"),
        publicPath: "/",
    },
    module:{
        rules: [
            {
                test: /\.(png|jpg|)$/,
                loader: 'url-loader'
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader?modules'
            },
            {
                test: /\.js$/,
                include:[resolve(__dirname,'../src'), resolve(__dirname)],
                exclude: /node_modules/,
                use: `babel-loader`
            },
            {
                test:/\.jsx$/,
                include: [resolve(__dirname, '../src'), resolve(__dirname)],
                exclude: /node_modules/,
                use: 'babel-loader'
            }
            ]
    },
    resolve: {
        enforceExtension: false,
        extensions: ['.js', '.jsx', '.json'],
        alias: {
            api$: srcPath('api/index.js'),
            components:srcPath('components'),
            containers:srcPath('containers'),
            pages:srcPath("pages")
        }
    },
    devtool: "inline-source-map",
    devServer: {
        contentBase:join(__dirname, 'static'),
        hot: true,
        publicPath:"/",
        compress:true,
        port:3000,
        historyApiFallback: true
    }
};