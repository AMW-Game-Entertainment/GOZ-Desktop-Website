/* global require, module, __dirname */

const path              = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const I18nPlugin        = require('i18n-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const rewireSass        = require('react-app-rewire-scss');

let languages = {
    en: require('./src/Languages/en.json'),
};

// eslint-disable-next-line no-unused-vars
module.exports = {
    webpack(config, env) {
        config = rewireSass(config, env); // eslint-disable-line no-param-reassign

        delete config.resolve.plugins; // eslint-disable-line no-param-reassign

        // Comment the following line to use all languages
        const isDevelopment = () => env === 'development';

        languages = isDevelopment() ? { en: languages.en } : languages;

        const multiConfig  = Object.keys(languages)
            .map((language) => {
                const configCopy = { ...config };

                const { resolve: { alias } } = configCopy;

                // eslint-disable-next-line no-param-reassign
                configCopy.resolve.alias = {
                    ...alias,
                    '~': path.resolve(__dirname, 'src/'),
                };

                configCopy.plugins = [
                    ...configCopy.plugins,
                    new I18nPlugin(languages[language]),
                ];

                if (isDevelopment()) {
                    configCopy.devtool = 'eval-source-map';
                } else {
                    // Remove sourcemaps from being created on build time
                    configCopy.devtool = ''; // https://webpack.js.org/configuration/devtool/#devtool
                }
                configCopy.plugins[1] = new HtmlWebpackPlugin({
                    ...configCopy.plugins[1].options,
                    filename: `index.html`,
                });
                configCopy.plugins[4] = new ExtractTextPlugin({
                    ...configCopy.plugins[4].options,
                    filename: `static/css/bundle.css`,
                });

                configCopy.output = {
                    ...configCopy.output,
                    filename: `static/js/bundle.${language}.js`,
                };

                return configCopy;
            });
        multiConfig.output = config.output;

        return multiConfig;
    },
};