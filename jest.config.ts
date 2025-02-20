import { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest/presets/default-esm', // Usa o ESM do ts-jest
  testEnvironment: 'node',
  extensionsToTreatAsEsm: ['.ts'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1', // Ajuste para resolver imports com .js
  },
};

export default config;