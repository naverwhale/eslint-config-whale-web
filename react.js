// eslint-config-whale-web
// Copyright (c) 2022-present NAVER Corp.
// MIT License
module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        "./index.js",
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 12,
        sourceType: "module",
        project: "./tsconfig.json"
    },
    plugins: ["react", "@typescript-eslint", "functional"],
    settings: {
        react: {
            version: "detect"
        }
    },
    rules: {
        // TypeScript
        "@typescript-eslint/consistent-type-imports": 2,
        "@typescript-eslint/explicit-function-return-type": 0,
        "@typescript-eslint/explicit-member-accessibility": 0,
        "@typescript-eslint/indent": 0,
        "@typescript-eslint/member-delimiter-style": 0,
        "@typescript-eslint/no-confusing-void-expression": [
            2,
            { ignoreArrowShorthand: true, ignoreVoidOperator: true }
        ],
        "no-duplicate-imports": 0,
        "@typescript-eslint/no-duplicate-imports": 2,
        "@typescript-eslint/no-implicit-any-catch": 2,
        "no-invalid-this": 0,
        "@typescript-eslint/no-invalid-this": 2,
        "@typescript-eslint/no-invalid-void-type": 2,
        "no-loop-func": 0,
        "@typescript-eslint/no-loop-func": 2,
        "no-loss-of-precision": 0,
        "@typescript-eslint/no-loss-of-precision": 2,
        "@typescript-eslint/no-parameter-properties": 0,
        "no-redeclare": 0,
        "@typescript-eslint/no-redeclare": 2,
        "no-shadow": 0,
        "@typescript-eslint/no-shadow": 2,
        "no-throw-literal": 0,
        "@typescript-eslint/no-throw-literal": 2,
        "@typescript-eslint/no-unnecessary-boolean-literal-compare": 2,
        "@typescript-eslint/no-unnecessary-condition": 2,
        "@typescript-eslint/no-unnecessary-type-arguments": 2,
        "no-unused-expressions": 0,
        "@typescript-eslint/no-unused-expressions": 2,
        "@typescript-eslint/no-unused-vars": 0,
        "@typescript-eslint/no-use-before-define": [2, { variables: false }],
        "@typescript-eslint/prefer-enum-initializers": 2,
        "@typescript-eslint/prefer-for-of": 2,
        "@typescript-eslint/prefer-includes": 2,
        "@typescript-eslint/prefer-nullish-coalescing": 2,
        "@typescript-eslint/prefer-optional-chain": 2,
        "@typescript-eslint/prefer-reduce-type-parameter": 2,
        "@typescript-eslint/prefer-string-starts-ends-with": 2,
        "@typescript-eslint/prefer-ts-expect-error": 2,
        "@typescript-eslint/promise-function-async": 2,
        "no-return-await": 0,
        "@typescript-eslint/return-await": 2,
        "@typescript-eslint/switch-exhaustiveness-check": 2,

        // React
        "react/jsx-boolean-value": 1,
        "react/jsx-curly-brace-presence": 1,
        "react/jsx-fragments": 1,
        "react/jsx-no-useless-fragment": 1,
        "react/jsx-uses-react": 0,
        "react/prefer-stateless-function": 1,
        "react/prop-types": 0,
        "react/react-in-jsx-scope": 0
    }
};
