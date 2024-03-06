// module.exports = {
//     preset: "ts-jest",
//     testEnvironment: "node",
//     transform: {
//         "^.+\\.ts?$": "ts-jest",
//     },
//     transformIgnorePatterns: ["<rootDir>/node_modules/"],
// }
const nextJest = require("next/jest")
const createJestConfig = nextJest({})

module.exports = createJestConfig(nextJest({}))
