import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/*.test.ts'],
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json',
    },
  },
  transform: {}
};

export default config;
