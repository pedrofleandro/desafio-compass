module.exports = {
    testPathIgnorePatterns: ["/node_modules/"],
    setupFilesAfterEnv: [
        "<rootDir>/src/tests/setupTests.js"
    ],
    transform: {
        "^.+\\.(js|jsx)$": "<rootDir>/node_modules/babel-jest"
    },
    moduleNameMapper: {
        "\\.(scss|css|sass)$": "identity-obj-proxy"
    },
    collectCoverage: true,
    collectCoverageFrom: [
        "src/**/*.jsx",
        "!src/**/*.spec.jsx"
    ],
    coverageReporters: ["lcov", "json"]
}