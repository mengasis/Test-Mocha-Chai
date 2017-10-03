module.exports = {
    "env": {
        "es6": true,
		"node": true,
		"mocha":true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "sourceType": "module"
	},
	"parser": "babel-eslint",
	"plugins": ["babel"],
    "rules": {
		"strict": 0,		
        "indent": [
            "error",
            "tab"
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "never"
		]
    }
};