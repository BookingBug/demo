//rules: http://eslint.org/docs/rules/

module.exports = {

    "extends": "eslint:recommended",

    "parser": "espree",

    "parserOptions": {
        "ecmaVersion": 8,
        "sourceType": "module"
    },

    "env": {
        "browser": true,
        "es6": true,
        "jasmine": true
    },

    "globals": {
        "angular": true,
        "_": true,
        "$": true,
        "jQuery": true,
        "moment": true
    },

    "rules": {

        "semi": "error",

        "block-spacing": "error", // warn if no space in braces like {key: val}

        "brace-style": ["error", "1tbs"], // warn for not using "one true brace style"

        "comma-spacing": ["error", {"before": false, "after": true}], // warn if no space after comma [thing1,thing2,...]

        "indent": ["off", 4], // TODO

        "key-spacing": ["error", {"beforeColon": false, "afterColon": true}], // warn if space before colon & not after colon in object literals like { key : val } or { key:val }

        "keyword-spacing": ["error", {"before": true, "after": true}],

        "no-console": ["off", {}], // TODO

        "no-empty": ["error", {"allowEmptyCatch": true}],

        "no-undef": ["off", {}], // TODO

        "no-unused-vars": ["error", {"vars": "all", "args": "none", "ignoreRestSiblings": false}],

        "space-before-function-paren": ["error", {
            "anonymous": "always",
            "named": "never",
            "asyncArrow": "always"
        }],

        "no-useless-escape": ["off",{}], //TODO

        "quotes": ["error", "single"],

        "arrow-parens": ["error", "as-needed", { "requireForBlockBody": true }],

        "prefer-const": ["error", { "destructuring": "all", "ignoreReadBeforeAssign": true }],

        "no-new-object": "error",

        "no-var": "error",

        "no-confusing-arrow": ['error', {
            "allowParens": true,
        }],
        
        "prefer-arrow-callback": ['error', {
            "allowNamedFunctions": false,
            "allowUnboundThis": true,
        }],

        "arrow-spacing": ['error', { "before": true, "after": true }],
        
        "object-shorthand": ['error', 'always', {"ignoreConstructors": false, "avoidQuotes": true,}],

        "quote-props": ['error', 'as-needed', { "keywords": false, "unnecessary": true, "numbers": false }],
    }
};
