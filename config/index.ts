import angular from '@angular-eslint/eslint-plugin';
import angularTemplate from '@angular-eslint/eslint-plugin-template';
import angularTemplateParser from '@angular-eslint/template-parser';
import tsConfig from '@ts-all/eslint-config';
import type { FlatConfig } from '@typescript-eslint/utils/ts-eslint';
import { angularRules, angularTemplateRules } from './rules/rules.js';

const config: FlatConfig.ConfigArray = [
    ...tsConfig,
    {
        ...tsConfig.find(i => i.name == '@ts-all/eslint-config'),
        name: '@ng-all/eslint-config',
        plugins: {
            '@angular-eslint': angular,
            '@angular-eslint/template': angularTemplate,
        },
        processor: angularTemplate.processors['extract-inline-html'],
        rules: angularRules,
    },
    {
        name: '@ng-all/eslint-config/template',
        files: ['**/*.html'],
        languageOptions: {
            parser: {
                meta: angularTemplateParser.meta,
                // eslint-disable-next-line @typescript-eslint/naming-convention
                parseForESLint: angularTemplateParser.parseForESLint,
            },
        },
        plugins: {
            '@angular-eslint/template': angularTemplate,
        },
        rules: angularTemplateRules,
    },
] satisfies FlatConfig.ConfigArray;

export default config;
