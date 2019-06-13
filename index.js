module.exports = {
    extends: 'airbnb-base',
    rules: {
        'arrow-parens': ['error', 'always'],
        curly: ['error', 'all'],
        'import/prefer-default-export': ['warn'],
        indent: ['error', 4, { SwitchCase: 1 }],
        'max-len': ['warn', 120],
        'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 0 }],
        'no-plusplus': 'off',
        'no-restricted-syntax': ['error', 'ForInStatement', 'LabeledStatement', 'WithStatement'],
        'object-curly-newline': 'off',
        'padding-line-between-statements': ['error', { blankLine: 'always', prev: '*', next: 'return' }],
        yoda: ['error', 'always', { onlyEquality: true }]
    },
    overrides: [
        {
            ...require('eslint-config-airbnb-base/rules/strict'),
            ...require('./rules/react'),
            ...require('./rules/react-a11y'),
            files: ['*.jsx'],
        }
    ]
};

