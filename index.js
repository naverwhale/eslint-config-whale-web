// eslint-config-whale-web
// Copyright (c) 2022-present NAVER Corp.
// MIT License
module.exports = {
    env: {
        browser: true,
        node: true,
        es6: true
    },
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module"
    },
    extends: ["eslint:recommended"],
    rules: {
        // Possible Errors
        "no-console": 1,
        "no-debugger": 1,
        "no-async-promise-executor": 1,
        "no-await-in-loop": 1,
        "no-extra-parens": 1,
        "no-misleading-character-class": 1,
        "no-prototype-builtins": 1,
        "no-template-curly-in-string": 1,
        "require-atomic-updates": 1,

        // Best Practices
        "curly": [1, "multi-line"],
        "dot-location": [1, "property"],
        "dot-notation": 1,
        "eqeqeq": 1,
        "no-else-return": 1,
        "no-extra-bind": 1,
        "no-extra-label": 1,
        "no-floating-decimal": 1,
        "no-implicit-coercion": [1, { boolean: false }],
        "no-lone-blocks": 1, // non-fixable
        "no-multi-spaces": 1,
        "no-return-assign": 1, // non-fixable
        "no-return-await": 1, // non-fixable
        "no-unused-expressions": 1, // non-fixable
        "no-useless-concat": 1, // non-fixable
        "no-useless-return": 1,
        "require-await": 1, // non-fixable
        "wrap-iife": 1,
        "yoda": 1,

        // Variables
        "no-undef-init": 1,

        // Stylistic Issues
        "array-bracket-newline": 1,
        "array-bracket-spacing": 1,
        "array-element-newline": [1, "consistent"],
        "block-spacing": 1,
        "brace-style": [1, "1tbs", { allowSingleLine: true }],
        "comma-dangle": 1,
        "comma-spacing": 1,
        "comma-style": 1,
        "computed-property-spacing": 1,
        "eol-last": 1,
        "func-call-spacing": 1,
        "func-style": 1, // non-fixable
        "function-paren-newline": [1, "consistent"],
        "indent": 1,
        "jsx-quotes": 1,
        "key-spacing": 1,
        "keyword-spacing": 1,
        "lines-around-comment": 1,
        "lines-between-class-members": 1,
        "max-len": [
            1,
            {
                code: 100,
                ignoreComments: true,
                ignoreRegExpLiterals: true,
                ignoreStrings: true,
                ignoreTemplateLiterals: true,
                ignoreUrls: true
            }
        ],
        "new-parens": 1,
        "newline-per-chained-call": 1,
        "no-lonely-if": 1,
        "no-multi-assign": 1, // non-fixable
        "no-multiple-empty-lines": 1,
        "no-negated-condition": 1, // non-fixable
        "no-plusplus": 1, // non-fixable
        "no-trailing-spaces": 1,
        "no-unneeded-ternary": 1,
        "no-whitespace-before-property": 1,
        "nonblock-statement-body-position": 1,
        "object-curly-newline": [1, { ObjectPattern: { multiline: true } }],
        "object-curly-spacing": [1, "always"],
        "object-property-newline": [1, { allowAllPropertiesOnSameLine: true }],
        "one-var": [1, { const: "never" }],
        "one-var-declaration-per-line": 1,
        "operator-assignment": 1,
        "operator-linebreak": 1,
        "padded-blocks": [1, "never"],
        "prefer-object-spread": 1,
        "quote-props": [1, "consistent-as-needed"],
        "quotes": [1, "double", { avoidEscape: true }],
        "semi": 1,
        "semi-spacing": 1,
        "semi-style": 1,
        "sort-vars": 1,
        "space-before-blocks": 1,
        "space-before-function-paren": [
            1,
            {
                anonymous: "always",
                named: "never",
                asyncArrow: "always"
            }
        ],
        "space-in-parens": 1,
        "space-infix-ops": 1,
        "space-unary-ops": 1,
        "spaced-comment": 1,
        "switch-colon-spacing": 1,
        "template-tag-spacing": 1,
        "unicode-bom": 1,

        // ECMAScript 6
        "arrow-body-style": 1,
        "arrow-parens": [1, "as-needed"],
        "arrow-spacing": 1,
        "generator-star-spacing": 1,
        "no-confusing-arrow": 1,
        "no-duplicate-imports": 1,
        "no-restricted-imports": 1,
        "no-useless-computed-key": 1,
        "no-useless-constructor": 1,
        "no-useless-rename": 1,
        "no-var": 1,
        "object-shorthand": 1,
        "prefer-arrow-callback": 1,
        "prefer-const": 1,
        "prefer-destructuring": 1,
        "prefer-numeric-literals": 1,
        "prefer-rest-params": 1,
        "prefer-spread": 1,
        "prefer-template": 1,
        "rest-spread-spacing": 1,
        "symbol-description": 1,
        "template-curly-spacing": 1,
        "yield-star-spacing": 1
    }
};
