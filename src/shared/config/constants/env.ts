export const getEnvVar = (key: string) => {
  const env = process.env[key];
  if (env === undefined) {
    throw new Error(`Env variable ${key} is required`);
  }

  return env || '';
};
export const NEXT_PUBLIC = 'NEXT_PUBLIC_';
export const ALCHEMY_ID = 'wLFZGliNZtg7v2NFHadIqr7F27Oc69gQ'; // getEnvVar(`${NEXT_PUBLIC}ALCHEMY_ID`);
export const RAINBOW_PROJECT_ID = 'bdc9db252d9afd3796235468122721b4'; // getEnvVar(`${NEXT_PUBLIC}RAINBOW_PROJECT_ID`);
