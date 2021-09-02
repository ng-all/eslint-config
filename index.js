module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "overrides": [
        {
            "files": [
                "*.ts"
            ],
            "extends": "@ts-all",
            "plugins": [
                "@angular-eslint"
            ],
            "rules": {
                "@angular-eslint/component-class-suffix": [
                    "error",
                    {
                        "suffixes": [
                            "Component",
                            "Page"
                        ]
                    }
                ],
                "@angular-eslint/component-max-inline-declarations": "off",
                "@angular-eslint/component-selector": [
                    "error",
                    {
                        "prefix": "",
                        "style": "kebab-case",
                        "type": "element"
                    }
                ],
                "@angular-eslint/contextual-decorator": "error",
                "@angular-eslint/contextual-lifecycle": "error",
                "@angular-eslint/directive-class-suffix": [
                    "error",
                    {
                        "suffixes": [
                            "Directive"
                        ]
                    }
                ],
                "@angular-eslint/directive-selector": [
                    "error",
                    {
                        "prefix": "",
                        "style": "camelCase",
                        "type": "attribute"
                    }
                ],
                "@angular-eslint/no-attribute-decorator": "error",
                "@angular-eslint/no-conflicting-lifecycle": "error",
                "@angular-eslint/no-empty-lifecycle-method": "error",
                "@angular-eslint/no-forward-ref": "off",
                "@angular-eslint/no-host-metadata-property": "error",
                "@angular-eslint/no-input-prefix": [
                    "error",
                    {
                        "prefixes": [
                            "can",
                            "has",
                            "is",
                            "should"
                        ]
                    }
                ],
                "@angular-eslint/no-input-rename": "error",
                "@angular-eslint/no-inputs-metadata-property": "error",
                "@angular-eslint/no-lifecycle-call": "error",
                "@angular-eslint/no-output-native": "error",
                "@angular-eslint/no-output-on-prefix": "error",
                "@angular-eslint/no-output-rename": "error",
                "@angular-eslint/no-outputs-metadata-property": "error",
                "@angular-eslint/no-pipe-impure": "error",
                "@angular-eslint/no-queries-metadata-property": "error",
                "@angular-eslint/pipe-prefix": "off",
                "@angular-eslint/prefer-on-push-component-change-detection": "error",
                "@angular-eslint/prefer-output-readonly": "error",
                "@angular-eslint/relative-url-prefix": "error",
                "@angular-eslint/sort-ngmodule-metadata-arrays": "error",
                "@angular-eslint/use-component-selector": "error",
                "@angular-eslint/use-component-view-encapsulation": "error",
                "@angular-eslint/use-injectable-provided-in": "error",
                "@angular-eslint/use-lifecycle-interface": "error",
                "@angular-eslint/use-pipe-transform-interface": "error"
            }
        },
        {
            "files": [
                "*.html"
            ],
            "parser": "@angular-eslint/template-parser",
            "plugins": [
                "@angular-eslint/template"
            ],
            "rules": {
                "@angular-eslint/template/accessibility-alt-text": "off",
                "@angular-eslint/template/accessibility-elements-content": "off",
                "@angular-eslint/template/accessibility-label-has-associated-control": "off",
                "@angular-eslint/template/accessibility-table-scope": "off",
                "@angular-eslint/template/accessibility-valid-aria": "off",
                "@angular-eslint/template/banana-in-box": "error",
                "@angular-eslint/template/click-events-have-key-events": "off",
                "@angular-eslint/template/conditional-complexity": [
                    "error",
                    {
                        "maxComplexity": 18
                    }
                ],
                "@angular-eslint/template/cyclomatic-complexity": [
                    "error",
                    {
                        "maxComplexity": 18
                    }
                ],
                "@angular-eslint/template/eqeqeq": "off",
                "@angular-eslint/template/i18n": "off",
                "@angular-eslint/template/mouse-events-have-key-events": "error",
                "@angular-eslint/template/no-any": "error",
                "@angular-eslint/template/no-autofocus": "off",
                "@angular-eslint/template/no-call-expression": "error",
                "@angular-eslint/template/no-distracting-elements": "error",
                "@angular-eslint/template/no-duplicate-attributes": "error",
                "@angular-eslint/template/no-negated-async": "error",
                "@angular-eslint/template/no-positive-tabindex": "off",
                "@angular-eslint/template/use-track-by-function": "off"
            }
        }
    ]
};
