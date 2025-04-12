
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: {
        popup: './popup.js',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    experiments: {
        asyncWebAssembly: true,
        topLevelAwait: true,
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                loader: 'html-loader',
            },
            {
                test: /\.wasm$/,
                type: 'asset/resource',
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],  // 👈 ADD THIS BLOCK
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'popup.html',
            template: './popup.html',
            chunks: ['popup'],
        }),
        new CopyPlugin({
            patterns: [
                { from: 'manifest.json', to: '.' },
                { from: 'icon.png', to: '.' },
                { from: 'config.json', to: '.' },
                { from: 'tokenizer.json', to: '.' },
                { from: 'tokenizer_config.json', to: '.' },
                { from: 'model_quantized.onnx', to: '.' }
            ]
        })

    ],

};
