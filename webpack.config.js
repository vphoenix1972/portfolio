const path = require('path');
const TerserJSPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
        postcssOptions: {
            plugins: function () {
                return [
                    require('precss'),
                    require('autoprefixer')
                ];
            }
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
    entry: path.resolve(__dirname, 'src/index.js'),
    optimization: {
        minimizer: [new TerserJSPlugin({}), new CssMinimizerPlugin({})],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js',
        assetModuleFilename: path.join('assets', '[name][ext]')
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
                test: path.resolve(__dirname, 'src/favicon.ico'),
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]'
                    }
                }
            },
            {
                test: /\.(png|jpg|gif|woff|woff2|ttf|svg|eot)$/,
                type: 'asset/resource'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/index.html'),
            filename: 'index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'css/bundle.css'
        })
    ]
};