import js from "@eslint/js";
import parser from "@typescript-eslint/parser";
import tseslint from "@typescript-eslint/eslint-plugin";
import prettier from "eslint-config-prettier";

export default [
	js.configs.recommended,
	{
		files: ["**/*.ts"],
		ignores: ["build/", ".prettierrc.js", "**/.eslintrc.js", "admin/words.js", "*dummy.ts"],
		languageOptions: {
			parser,
			parserOptions: {
				ecmaVersion: "latest",
				sourceType: "module",
				project: "./tsconfig.json",
			},
			globals: {
				require: "readonly",
				module: "readonly",
				__dirname: "readonly",
				exports: "readonly",
				process: "readonly",
			},
		},
		plugins: {
			"@typescript-eslint": tseslint,
		},
		rules: {
			// Add recommended rules manually if needed, or just your custom rules:
			"@typescript-eslint/no-parameter-properties": "off",
			"@typescript-eslint/no-explicit-any": "off",
			"@typescript-eslint/no-use-before-define": [
				"error",
				{
					functions: false,
					typedefs: false,
					classes: false,
				},
			],
			"@typescript-eslint/no-unused-vars": [
				"error",
				{
					ignoreRestSiblings: true,
					argsIgnorePattern: "^_",
				},
			],
			"@typescript-eslint/explicit-function-return-type": [
				"warn",
				{
					allowExpressions: true,
					allowTypedFunctionExpressions: true,
				},
			],
			"@typescript-eslint/no-object-literal-type-assertion": "off",
			"@typescript-eslint/interface-name-prefix": "off",
			"@typescript-eslint/no-non-null-assertion": "off",
			"no-var": "error",
			"prefer-const": "error",
			"no-trailing-spaces": "error",
		},
	},
	{
		files: ["*.test.ts"],
		rules: {
			"@typescript-eslint/explicit-function-return-type": "off",
		},
	},
	prettier,
];
