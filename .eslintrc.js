//rules: http://eslint.org/docs/rules/

module.exports = {

    extends: 'eslint:recommended',

    parser: 'espree',

    parserOptions: {
        'ecmaVersion': 8,
        'sourceType': 'module',
        'ecmaFeatures': {
            'experimentalObjectRestSpread': true
        }
    },

    env: {
        'browser': true,
        'es6': true,
        'jasmine': true
    },

    plugins: ['angular'],

    globals: {
        'angular': true,
        '_': true,
        '$': true,
        'jQuery': true,
        'moment': true
    },

    rules: {
        /* Angular linting rules */
        //'angular/avoid-scope-typos': 0, TODO : check for bug fix for this rule
        'angular/module-getter': 1,
        'angular/module-setter': 1,
        //'angular/no-private-call': [2,{'allow':['$$parentForm', '$$value$$', '$$phase']}],
        'angular/no-private-call': 0,

        /* Best practises */
        'angular/component-limit': 0,
        'angular/controller-as-route': 2,
        'angular/controller-as': 0,
        'angular/di-unused': 2,
        'angular/directive-restrict': 0,
        'angular/empty-controller': 2,
        'angular/no-controller': 0,
        'angular/no-inline-template': 2,
        'angular/no-run-logic': 2,
        'angular/no-services': [2,['$q', '$filter']],
        'angular/on-watch': 0,
        'angular/prefer-component': 0,

        /* Avoid deprecated features */
        'angular/no-cookiestore': 0,
        'angular/no-directive-replace': 0,
        'angular/no-http-callback': 0,

        /* Naming */
        'angular/component-name': 0,
        'angular/constant-name': 0,
        'angular/controller-name': 0,
        'angular/directive-name': 0,
        'angular/factory-name': 0,
        'angular/file-name': 0,
        'angular/filter-name': 0,
        'angular/module-name': 0,
        'angular/provider-name': 0,
        'angular/service-name': 0,
        'angular/value-name': 0,

        /* Conventions */
        'angular/di-order': 0,
        'angular/di': 0,
        'angular/dumb-inject': 0,
        'angular/function-type': 0,
        'angular/module-dependency-order': 0,
        'angular/no-service-method': 0,
        'angular/one-dependency-per-line': 0,
        'angular/rest-service': 0,
        'angular/watchers-execution': 0,
        
        /* Angular wrappers */
        'angular/angularelement': 0,
        'angular/definedundefined': 0,
        'angular/document-service': 0,
        'angular/foreach': 0,
        'angular/interval-service': 0,
        'angular/json-function': 0,
        'angular/log': 0,
        'angular/no-angular-mock': 0,
        'angular/no-jquery-angularelement': 0,
        'angular/timeout-service': 0,
        'angular/typecheck-array': 0,
        'angular/typecheck-date': 0,
        'angular/typecheck-function': 0,
        'angular/typecheck-number': 0,
        'angular/typecheck-object': 0,
        'angular/typecheck-string': 0,
        'angular/typecheck-service': 0,

        'angular/on-destroy': 0,

        'semi': 'error',

        'block-spacing': 'error', // warn if no space in braces like {key: val}

        'brace-style': ['error', '1tbs'], // warn for not using 'one true brace style'

        'comma-spacing': ['error', {'before': false, 'after': true}], // warn if no space after comma [thing1,thing2,...]

        'indent': ['off', 4], // TODO

        'key-spacing': ['error', {'beforeColon': false, 'afterColon': true}], // warn if space before colon & not after colon in object literals like { key : val } or { key:val }

        'keyword-spacing': ['error', {'before': true, 'after': true}],

        'no-console': ['off', {}], // TODO

        'no-empty': ['error', {'allowEmptyCatch': true}],

        'no-undef': ['off', {}], // TODO

        'no-unused-vars': ['error', {'vars': 'all', 'args': 'none', 'ignoreRestSiblings': true}],

        'space-before-function-paren': ['error', {
            'anonymous': 'always',
            'named': 'never',
            'asyncArrow': 'always'
        }],

        'no-useless-escape': ['off',{}], //TODO

        'quotes': ['error', 'single'],

        'arrow-parens': ['error', 'as-needed', { 'requireForBlockBody': true }],

        'prefer-const': ['error', { 'destructuring': 'all', 'ignoreReadBeforeAssign': true }],

        'no-new-object': 'error',

        'no-var': 'error',

        'no-confusing-arrow': ['error', {
            'allowParens': true,
        }],

        'prefer-arrow-callback': ['error', {
            'allowNamedFunctions': false,
            'allowUnboundThis': true,
        }],

        'arrow-spacing': ['error', { 'before': true, 'after': true }],

        'object-shorthand': ['error', 'always', {'ignoreConstructors': false, 'avoidQuotes': true,}],

        'quote-props': ['error', 'as-needed', { 'keywords': false, 'unnecessary': true, 'numbers': false }],
    }
};
