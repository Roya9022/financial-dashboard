declare module 'tailwindcss/resolveConfig' {
  import { Config } from 'tailwindcss';
  const resolveConfig: (config: Config) => {
    theme: unknown;
  };
  export default resolveConfig;
}
