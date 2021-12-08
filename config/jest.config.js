const fs = require('fs');

const swcConfig = JSON.parse(fs.readFileSync(`${__dirname}/.swcrc`, 'utf-8'));

module.exports = {
  rootDir: '../',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  transform: {
    '.+\\.(svg|css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$':
      'jest-transform-stub',
    '^.+\\.(j|t)sx?$': ['@swc/jest', { ...swcConfig }],
  },
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
};
