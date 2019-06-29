module.exports = {
  testEnvironment: 'node',
  testMatch: [
    '**/?(*.)test.mjs',
  ],
  moduleFileExtensions: [
    'js',  // not used, but MANDATORY
    'mjs',  // actually used
  ],
  transform: {
    '^.+\\.mjs$': 'babel-jest',
  },
};
