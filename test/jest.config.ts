export default {
  rootDir: '..',
  displayName: 'end2end-tests',
  clearMocks: true,
  moduleDirectories: ['node_modules', '<rootDir>'],
  setupFilesAfterEnv: ['<rootDir>/test/jest.setup.ts'],
  testMatch: ['<rootDir>/test/**/*.test.ts'],
  preset: 'ts-jest'
}
