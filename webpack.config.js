const path = require('path');
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
        entry: './src/index.js',
        output: {
                path: path.resolve(__dirname, './dist/'),
                filename: 'bundle.js'
        },
        module: {
                rules: [
                        {
                                test: /\.js$/,
                                exclude: /(node_modules)/,
                                use: {
                                        loader: 'babel-loader',
                                        options: {
                                                presets: ['babel-preset-env', 'babel-preset-react'],
                                                plugins: ["react-hot-loader/babel"],
                                        },
                                },
                        },
                        {
                                test: /\.css$/,
                                exclude: /(node_modules)/,
                                use: [
                                        { loader: 'style-loader' },
                                        { loader: 'css-loader' },
                                ],
                        },
                        {
                                test: /\.scss$/,
                                exclude: /(node_modules)/,
                                use: [
                                        { loader: 'style-loader' },
                                        { loader: 'css-loader' },
                                        { loader: 'sass-loader' },
                                ],
                        },
                        {
                                test: /\.png$/,
                                exclude: /(node_modules)/,
                                use: [
                                        { loader: 'file-loader' },
                                ],
                        },
                ],
        },
        plugins: [
                new CleanWebpackPlugin(),
                new webpack.HotModuleReplacementPlugin(),
                new HtmlWebpackPlugin({
                        template: 'src/index.html',
                }),
        ],
        devServer: {
                hot: true,
        },
};