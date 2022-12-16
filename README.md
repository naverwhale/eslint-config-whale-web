# eslint-config-whale-web

[![npm version](https://badge.fury.io/js/@naverwhale%2Feslint-config-whale-web.svg)](https://www.npmjs.com/package/@naverwhale/eslint-config-whale-web)

네이버 웨일 웹 플랫폼 공통 자바스크립트 코딩 컨벤션입니다.

## 설치

```bash
$ npm install --save-dev @naverwhale/eslint-config-whale-web
```

## eslint 설정

`.eslintrc.js` 파일

```js
// ES6+ 프로젝트
module.exports = {
    extends: "@naverwhale/eslint-config-whale-web",
    //...
};

// React 프로젝트
module.exports = {
    extends: "@naverwhale/eslint-config-whale-web/react",
    //...
};

// Vue.js 프로젝트
module.exports = {
    extends: "@naverwhale/eslint-config-whale-web/vue",
    //...
};
```

`.eslintignore` 파일

```js
!.eslintrc.js
```

### ℹ️ `console` / `debugger`

`no-console`, `no-debugger` 설정은 `warn` 레벨입니다.
개발시 편의에 따라 `.eslintrc.js`의 `rules` 항목에서 해당 옵션을 재정의하여 변경할 수 있습니다.

```js
module.exports = {
    //...
    rules: {
        "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
    }
};
```

## License

`eslint-config-whale-web` is released under the [MIT license](LICENSE).
