# @ng-all/eslint-config
> [eslint-config](https://eslint.org) for [Angular](https://angular.io) projects

## Usage

* get the package from npm
```shell
$ npm install @ng-all/eslint-config -D
```

* just extends it in your eslint config file eg. `.eslintrc.json`
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

* ng lint with `@angular-eslint/builder` configured in `angular.json`
```json
{
    // ...
    "lint": {
        "builder": "@angular-eslint/builder:lint",
        "options": {
            "lintFilePatterns": [
                "./**/*.ts",
                "./**/*.html"
            ]
        }
    }
    // ...
}
```

* VS Code Settings for eslint extension
> update eslint extension's settings to let it check html file in VS Code
```json
{
    // ./.vscode/settings.json
    // ...
    "eslint.options": {
        "extensions": [
            ".ts",
            ".js",
            ".html"
        ]
    },
    "eslint.validate": [
        "javascript",
        "typescript",
        "html"
    ]
    // ...
}
```

## Dependency

* dependencies
    * [@angular-eslint/eslint-plugin](https://www.npmjs.com/@angular-eslint/eslint-plugin)
    * [@angular-eslint/eslint-plugin-template](https://www.npmjs.com/@angular-eslint/eslint-plugin-template)
    * [@angular-eslint/template-parser](https://www.npmjs.com/@angular-eslint/template-parser)
    * [@ts-all/eslint-config](https://www.npmjs.com/@ts-all/eslint-config)

* *peerDependencies*
  * [@angular-eslint/builder](https://www.npmjs.com/@angular-eslint/builder)
