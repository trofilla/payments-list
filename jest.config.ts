const { getJestProjects } = require('@nx/jest');

export default {
  projects: getJestProjects(),
  testTimeout: 20000,
  reporters: ['default'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: -10,
    },
  },
};
