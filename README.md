# @ng-all/eslint-config
> [eslint-config](https://eslint.org) for [Angular](https://angular.io) projects

## Usage
* get the package from npm
```shell
$ npm install @ng-all/eslint-config -D
```

* extends it in your eslint config file eg. `.eslintrc.json`
```json
{
    // ...
    "extends": [
        // ...
        "@ng-all"
        // ...
    ]
    // ...
}
```

* linting
```shell
$ npx eslint ./ --ext .ts --ext .js --ext .html
```
