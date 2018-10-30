module.exports = {
  extends: ["airbnb", "prettier"],
  parser: "babel-eslint",
  esversion: 6,
  "linebreak-style": ["error", "windows"],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ["react", "jsx-a11y", "import", "prettier"],
  rules: {
    "linebreak-style": ["error", "windows"],
    "prettier/prettier": ["error", { singleQuote: true, trailingComma: "none" }]
  },
  env: {
    es6: true,
    browser: true,
    node: true,
    jest: true
  }
};

// module.export = {
// 	"extends": [
// 		"airbnb",
// 		"prettier",
// 		"prettier/react"
// 	],
// 	"plugins": [
// 		"prettier"
// 	],
// 	"parserOptions": {
// 		"ecmaVersion": 2016,
// 		"sourceType": "module",
// 		"ecmaFeatures": {
// 			"jsx": true
// 		}
// 	},
// 	"env": {
// 		"es6": true,
// 		"browser": true,
// 		"node": true
// 	}
// }
