module.exports = {
  // default: "(/__tests__/.*|(\\.|/)(test|spec))\\.[jt]sx?$"
  // -> only take .spec.js or .test.js in __tests__ directories
  // so that .spec.browser.js files (for karma) won't be caught by jest
  testRegex: "(\\.|/)(test|spec)\\.[jt]sx?$",
  transform: {
    "^.+\\.jsx?$": "babel-jest"
  },
  transformIgnorePatterns: [],
  testEnvironment: "node",
  
};