import type { Linter } from 'eslint';

/** https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/README.md */
export const angularRules: Linter.RulesRecord = Object.freeze<Linter.RulesRecord>({

    // Possible problems
    '@angular-eslint/contextual-lifecycle': 'error',
    '@angular-eslint/no-async-lifecycle-method': 'off',
    '@angular-eslint/no-attribute-decorator': 'error',
    '@angular-eslint/sort-lifecycle-methods': 'error',

    // Suggestions
    '@angular-eslint/component-class-suffix': ['error', { suffixes: ['Component', 'Page'] }],
    '@angular-eslint/component-max-inline-declarations': 'off',
    '@angular-eslint/component-selector': ['error', { prefix: '', style: 'kebab-case', type: 'element' }],
    '@angular-eslint/consistent-component-styles': 'error',
    '@angular-eslint/contextual-decorator': 'error',
    '@angular-eslint/directive-class-suffix': ['error', { suffixes: ['Directive'] }],
    '@angular-eslint/directive-selector': ['error', { prefix: '', style: 'camelCase', type: 'attribute' }],
    '@angular-eslint/no-conflicting-lifecycle': 'error',
    '@angular-eslint/no-duplicates-in-metadata-arrays': 'error',
    '@angular-eslint/no-empty-lifecycle-method': 'error',
    '@angular-eslint/no-forward-ref': 'off',
    '@angular-eslint/no-input-prefix': 'off',
    '@angular-eslint/no-input-rename': 'off',
    '@angular-eslint/no-inputs-metadata-property': 'error',
    '@angular-eslint/no-lifecycle-call': 'error',
    '@angular-eslint/no-output-native': 'error',
    '@angular-eslint/no-output-on-prefix': 'error',
    '@angular-eslint/no-output-rename': 'error',
    '@angular-eslint/no-outputs-metadata-property': 'error',
    '@angular-eslint/no-pipe-impure': 'error',
    '@angular-eslint/no-queries-metadata-property': 'error',
    '@angular-eslint/pipe-prefix': 'off',
    '@angular-eslint/prefer-on-push-component-change-detection': 'error',
    '@angular-eslint/prefer-output-readonly': 'error',
    '@angular-eslint/prefer-signals': ['error', { preferReadonlySignalProperties: true, preferInputSignals: false, preferQuerySignals: false, useTypeChecking: true }],
    '@angular-eslint/prefer-standalone': 'error',
    '@angular-eslint/relative-url-prefix': 'error',
    '@angular-eslint/require-localize-metadata': 'off',
    '@angular-eslint/runtime-localize': 'off',
    '@angular-eslint/use-component-selector': 'error',
    '@angular-eslint/use-component-view-encapsulation': 'error',
    '@angular-eslint/use-injectable-provided-in': 'off',
    '@angular-eslint/use-lifecycle-interface': 'error',
    '@angular-eslint/use-pipe-transform-interface': 'error',
});

/** https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin-template/README.md  */
export const angularTemplateRules: Linter.RulesRecord = Object.freeze<Linter.RulesRecord>({

    // Possible problems
    '@angular-eslint/template/no-duplicate-attributes': 'error',

    // Suggestions
    '@angular-eslint/template/alt-text': 'off',
    '@angular-eslint/template/banana-in-box': 'error',
    '@angular-eslint/template/button-has-type': 'off',
    '@angular-eslint/template/click-events-have-key-events': 'off',
    '@angular-eslint/template/conditional-complexity': ['error', { maxComplexity: 18 }],
    '@angular-eslint/template/cyclomatic-complexity': ['error', { maxComplexity: 18 }],
    '@angular-eslint/template/elements-content': 'error',
    '@angular-eslint/template/eqeqeq': 'off',
    '@angular-eslint/template/i18n': 'off',
    '@angular-eslint/template/interactive-supports-focus': 'off',
    '@angular-eslint/template/label-has-associated-control': 'off',
    '@angular-eslint/template/mouse-events-have-key-events': 'error',
    '@angular-eslint/template/no-any': 'error',
    '@angular-eslint/template/no-autofocus': 'off',
    '@angular-eslint/template/no-call-expression': ['error', { allowPrefix: '$', allowSuffix: '$' }],
    '@angular-eslint/template/no-distracting-elements': 'error',
    '@angular-eslint/template/no-inline-styles': 'off',
    '@angular-eslint/template/no-interpolation-in-attributes': 'error',
    '@angular-eslint/template/no-negated-async': 'error',
    '@angular-eslint/template/no-positive-tabindex': 'off',
    '@angular-eslint/template/prefer-control-flow': 'error',
    '@angular-eslint/template/prefer-ngsrc': 'off',
    '@angular-eslint/template/role-has-required-aria': 'off',
    '@angular-eslint/template/table-scope': 'error',
    '@angular-eslint/template/use-track-by-function': 'off',
    '@angular-eslint/template/valid-aria': 'off',

    // Layout
    '@angular-eslint/template/attributes-order': 'off',
    '@angular-eslint/template/prefer-self-closing-tags': 'error',
    '@angular-eslint/template/prefer-static-string-properties': 'off',
});
