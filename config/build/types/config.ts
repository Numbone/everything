export type BuildMode = 'production' | 'development';
export interface BuildPath {
  entry: string;
  build: string;
  html: string;
  src: string;
  locales:string;
  buildLocales:string;
}

export interface BuildOptions {
  mode: BuildMode;
  paths: BuildPath;
  isDev: boolean;
  port: number;
  project:'storybook' | 'frontend' | 'jest'
}
export interface buildEnv {
  mode: BuildMode;
  port: number;
}
