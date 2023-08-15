export const getEnvVar = (key: string) => {
  const env = process.env[key];

  return env || '';
};
export const NEXT_PUBLIC = 'NEXT_PUBLIC_';
