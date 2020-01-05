module.exports = {
	parser: '@typescript-eslint/parser', // Specifies the ESLint parser
	plugins: ['filenames', '@typescript-eslint'],
	extends: [
		// 'plugin:@typescript-eslint/recommended',  // We're not using the recommended rules from @typescript-eslint/eslint-plugin  (but leaving this comment as documentation)
		'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
		'plugin:prettier/recommended', // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
	],
	parserOptions: {
		ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
		sourceType: 'module', // Allows for the use of imports
	},
	rules: {
		// Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
		// e.g. '@typescript-eslint/explicit-function-return-type': 'off',
		// 0 is 'off', 1 is 'warning', 2 is 'error'
		camelcase: 'off',
		curly: 2,
		'filenames/match-regex': [1, '^(?!.*--)(?!^[0-9-])(?!.*(-|-.spec)$)[a-z0-9-]+(.spec)?$', true],
		'max-depth': [1, 5],
		'max-lines': [1, { max: 500, skipBlankLines: true }],
		'max-len': [1, { code: 120, ignoreComments: true, ignoreUrls: true }],
		'no-const-assign': 2,
		'no-var': 2,
		'prefer-const': 2,
		quotes: [2, 'single'],
		'@typescript-eslint/camelcase': [1],
		'@typescript-eslint/class-name-casing': [1],
		'@typescript-eslint/interface-name-prefix': [1, { prefixWithI: 'always' }],
	},
};
