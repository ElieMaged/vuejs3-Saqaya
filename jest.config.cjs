module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.vue$': 'vue3-jest',
    '^.+\\.[jt]sx?$': 'ts-jest',
  },
  moduleFileExtensions: ['vue', 'ts', 'js', 'json'],
}
