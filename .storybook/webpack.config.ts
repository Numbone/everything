import path from 'path';
import { BuildPath } from './../config/build/types/config';
import webpack, { RuleSetRule } from 'webpack';
import { buildCssLoader } from '../config/build/loaders/buildCssLoader'
export default ({ config }: { config: webpack.Configuration }) => {
    const paths: BuildPath = {
      build: '',
      entry: '',
      html: '',
      src: path.resolve(__dirname, '..', '..', 'src'),
    };
  
    if (config.resolve && config.resolve.modules) {
      config.resolve.modules.push(paths.src);
    }
  
    if (config.resolve && config.resolve.extensions) {
      config.resolve.extensions.push('.ts', '.tsx');
    }
  
    if (config.module && config.module.rules) {
      config.module.rules.push(buildCssLoader(true));
    }
    if (config.module && config.module.rules) {
      // @ts-ignore
      config.module.rules=config.module?.rules?.map((rule: RuleSetRule )=>{
        if(/svg/.test(rule.test as string)){
          return {...rule,exclude: /\.svg$/i};
        }
        return rule
      })
    }
    if (config.module && config.module.rules) {
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    });
    }
  
    return config;
  };