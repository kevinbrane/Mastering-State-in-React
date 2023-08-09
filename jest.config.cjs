module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect',
    './src/setupTests.js'  // Añade esta línea. Asegúrate de que la ruta sea la correcta.
  ],
  moduleNameMapper: {
      "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
};