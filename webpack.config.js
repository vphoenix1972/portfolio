const path = require('path');
const TerserJSPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV || 'development';
const IsDevelopment = NODE_ENV === 'development';

const cssLoader = {
    loader: 'css-loader',
    options: {
        sourceMap: IsDevelopment
    }
};

const postcssLoader = {
    loader: 'postcss-loader',
    options: {
        plugins: function () {
            return [
                require('precss'),
                require('autoprefixer')
            ];
        }
    }
};

const sassLoader = {
    loader: 'sass-loader',
    options: {
        sourceMap: IsDevelopment
    }
};

module.exports = {
    mode: IsDevelopment ? 'development' : 'production',
    devtool: IsDevelopment ? 'source-map' : undefined,
    entry: './src/index.js',
    optimization: {
        minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    cssLoader,
                    postcssLoader,
                    sassLoader
                ]
            },
            {
                test: /\.(html|png)$/,
                loader: "file-loader?name=[name].[ext]"
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/bundle.css'
        })
    ]
};