import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(ts|tsx|js|jsx)$": "babel-jest",
  },
  globals: {
    "ts-jest": {
      useESM: true, // Importante para soportar import.meta
    },
  },
  extensionsToTreatAsEsm: [".ts", ".tsx"],
};

export default config;