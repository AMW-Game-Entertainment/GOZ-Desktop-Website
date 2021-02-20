'use strict';
const path = require('path');

module.exports = {
    'extends':  'airbnb',
    'parser':   'babel-eslint',
    'env':      {
        'browser':       true,
        'jest':          true,
        'serviceworker': true,
    },
    'globals':  {
        '__TEST__': true,
        '__':       true,
    },
    'settings': {
        'import/resolver': {
            'webpack': {
                config: {
                    resolve: {
                        alias: {
                            '~': path.resolve(__dirname, 'src/'),
                        },
                    },
                },
            },
        },
    },
    'rules':    {
        "import/prefer-default-export": 0,
        'no-use-before-define':         [2, { functions: false }],
        'global-require':               1,
        'quotes':                       [2, 'single', { avoidEscape: true, allowTemplateLiterals: true }],
        'no-console':                   1,
        'eol-last':                     2,
        'arrow-parens':                 [2, 'always'],
        'max-len':                      [2, 120],
        'no-multi-spaces':              [2, {
            'exceptions': {
                'VariableDeclarator':   true,
                'ImportDeclaration':    true,
                'AssignmentExpression': true,
            },
        }],
        'key-spacing':                  [2, {
            'align': {
                'beforeColon': false,
                'afterColon':  true,
                'on':          'value',
                'mode':        'minimum',
            },
        }],
        'object-curly-newline':         ['error', {
            'ObjectExpression': { 'multiline': true, 'consistent': true },
            'ObjectPattern':    { 'multiline': true },
        }],
        'indent':                       [2, 4, {
            'SwitchCase':             0,
            'VariableDeclarator':     { 'var': 1, 'let': 1, 'const': 2 },
            'MemberExpression':       1,
            'FunctionDeclaration':    { 'parameters': 'first' },
            'FunctionExpression':     { 'parameters': 'first' },
            'CallExpression':         { 'arguments': 'first' },
            'ArrayExpression':        'first',
            'ObjectExpression':       'first',
            'ImportDeclaration':      'first',
            'flatTernaryExpressions': false,
        }],
        'camelcase':                    1,
        'function-paren-newline':       [2, 'consistent'],
        'linebreak-style':              0,
        'no-confusing-arrow':           0,
        'no-nested-ternary':            0,

        // react
        'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx'] }],
        'react/jsx-indent':             [2, 4],
        'react/jsx-indent-props':       [2, 4],
        'jsx-quotes':                   [2, 'prefer-single'],

        // jsx-a11y
        // 'jsx-a11y/anchor-is-valid':     [2],

        // import
        'import/no-extraneous-dependencies': [2, {
            'devDependencies':      true,
            'optionalDependencies': false,
            'peerDependencies':     false,
        }],
    },
};