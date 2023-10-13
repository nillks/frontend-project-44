module.exports = {
  testEnvironment: 'node', // или другая среда, соответствующая вашему проекту
  collectCoverage: true,
  collectCoverageFrom: ['**/*.{js,jsx}', '!**/node_modules/**', '!**/path/to/ignored/files/**'],
  coverageReporters: ['lcov', 'text-summary'],
};
