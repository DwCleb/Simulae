module.exports = {
  preset: 'react-native',
  setupFiles: ['./jestSetupFile.js'],
  bail: 1,
  coverageThreshold: {
    global: {
      branches: 77.5,
      functions: 77.5,
      lines: 77.5,
      statements: 77.5,
    },
  },
  collectCoverage: true,
  notify: false,
  coverageReporters: ['lcov', 'text', 'json', 'text-summary'],
  forceCoverageMatch: ['<rootDir>/source/**/*.test.{ts,tsx}'],
  coverageDirectory: '<rootDir>/coverage',
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  moduleNameMapper: {
    '^~/(.*)': '<rootDir>/source/$1',
  },
  collectCoverageFrom: [
    'src/components/**/*.{js,jsx,ts,tsx}',
    '!<rootDir>/source/index.tsx',
    '!<rootDir>/source/theme/index.tsx',
    '!<rootDir>/source/components/index.tsx',
    '!<rootDir>/source/routes/index.tsx',
  ],
  testMatch: ['<rootDir>/source/**/*.test.(ts|tsx)'],
  transform: {
    '^.+\\.(ts|tsx)$': 'babel-jest',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|react-navigation|@react-native-community)|@react-navigation/(.*)|react-native-safe-area-view/)',
  ],
  testResultsProcessor: 'jest-sonar-reporter',
};
