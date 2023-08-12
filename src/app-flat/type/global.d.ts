interface moduleIScss {
  [index: string]: string;
}

declare module '*.scss' {
  // eslint-disable-next-line import/no-anonymous-default-export
  export default moduleIScss;
}

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production';
      NEXT_PUBLIC_ALCHEMY_ID: string;
      NEXT_PUBLIC_RAINBOW_PROJECT_ID: string;
    }
  }
}
