import path from 'path';
import { BuildPath } from './../config/build/types/config';
import webpack, { DefinePlugin, RuleSetRule } from 'webpack';
import { buildCssLoader } from '../config/build/loaders/buildCssLoader'
export default ({ config }: { config: webpack.Configuration }) => {
    const paths: BuildPath = {
      build: '',
      entry: '',
      html: '',
      src: path.resolve(__dirname, '..', '..', 'src'),
      locales: '',
      buildLocales: '',
    };
  
    config!.resolve!.modules!.push(paths.src);
    config!.resolve!.extensions!.push('.ts', '.tsx');
  
   

    config!.module!.rules = config.module!.rules!.map((rule: any) => {
      if (/svg/.test(rule.test as string)) {
          return { ...rule, exclude: /\.svg$/i };
      }

      return rule;
    });
    config!.module!.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
  });
    config!.module!.rules.push(buildCssLoader(true));
    config!.plugins!.push(new DefinePlugin({
      __IS_DEV__: JSON.stringify(true),
      __PROJECT__: JSON.stringify('storybook'),
  }));
  
    return config;
  };