module.exports = {
  collectCoverage: true,
  coverageProvider: "v8",
  collectCoverageFrom: [
    "**/*.{ts,tsx}",
    "!**/*.d.ts",
    "!**/node_modules/**",
    "!<rootDir>/out/**",
    "!<rootDir>/.next/**",
    "!<rootDir>/coverage/**",
  ],
  moduleNameMapper: {
    uuid: require.resolve("uuid"),
    "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",
    "^.+\\.(css|sass|scss)$": "<rootDir>/__mocks__/styleMock.js",
    "^.+\\.(png|jpg|jpeg|gif|webp|avif|ico|bmp|svg)$/i": `<rootDir>/__mocks__/fileMock.js`,
    "^@app(.*)$": "<rootDir>/src/app/$1",
    "^@tasks(.*)$": "<rootDir>/src/app/tasks/$1",
    "^@components(.*)$": "<rootDir>/src/app/tasks/components/$1",
    "^@task-types(.*)$": "<rootDir>/src/app/tasks/task-types/$1",
    "@next/font/(.*)": `<rootDir>/__mocks__/nextFontMock.js`,
    "next/font/(.*)": `<rootDir>/__mocks__/nextFontMock.js`,
    "server-only": `<rootDir>/__mocks__/empty.js`,
  },
  testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/.next/"],
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": ["babel-jest", { presets: ["next/babel"] }],
  },
  transformIgnorePatterns: [
    "/node_modules/",
    "^.+\\.module\\.(css|sass|scss)$",
  ],
};
