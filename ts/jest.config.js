/** @type {import('jest').Config} */
module.exports = {
  preset: 'ts-jest',
  testTimeout: 50000,
  testMatch: ['**/__tests__/*.test.ts'],
  transform: {
    '^.+\\.(ts|tsx|js)$': 'ts-jest',
  },
  roots: ['<rootDir>/src'],
}
