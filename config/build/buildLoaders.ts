import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildCssLoader } from './loaders/buildCssLoader';
import { buildBabelLoader } from './loaders/buildBabelLoader';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
    const cssLoader = buildCssLoader(options.isDev);
    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };
    const codebabelLoader = buildBabelLoader({ ...options, isTsx: false });
    const txsCodebabelLoader = buildBabelLoader({ ...options, isTsx: true });
    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };
    // const typescriptLoader = {
    //     test: /\.tsx?$/,
    //     use: 'ts-loader',
    //     exclude: /node_modules/,
    // };
    return [
        fileLoader,
        svgLoader,
        codebabelLoader,
        txsCodebabelLoader,
        // typescriptLoader,
        cssLoader,
    ];
}
