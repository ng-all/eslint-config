# @ng-all/eslint-config
> [eslint-config](https://eslint.org) for [Angular](https://angular.io) projects

## Usage

* get the package from npm
```shell
$ npm install @ng-all/eslint-config -D
```

* just extends it in your eslint config file eg. `eslint.config.mjs`
```javascript
import { default as config } from '@ng-all/eslint-config';

export default config;

```

* linting
```shell
$ npx eslint
```
