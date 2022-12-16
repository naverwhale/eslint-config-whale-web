// eslint-config-whale-web
// Copyright (c) 2022-present NAVER Corp.
// MIT License
module.exports = {
    extends: [
        "./index.js",
        "plugin:vue/recommended"
    ],
    rules: {
        // vue/strongly-recommended
        "vue/component-name-in-template-casing": [1, "kebab-case"],
        "vue/html-closing-bracket-newline": [1, { multiline: "never" }],
        "vue/html-indent": [1, 4, { baseIndent: 0 }],
        "vue/html-self-closing": [
            1,
            {
                html: { normal: "never" },
                svg: "never"
            }
        ],
        "vue/multiline-html-element-content-newline": 0,
        "vue/singleline-html-element-content-newline": 0,

        // vue/recommended
        "vue/no-v-html": 0,

        // vue/uncategorized
        "vue/script-indent": [1, 4]
    }
};
