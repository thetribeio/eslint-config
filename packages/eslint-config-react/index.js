const eslintConfig = require('@thetribe/eslint-config');

module.exports = {
    extends: 'airbnb',
    rules: {
        // We don't use extends to prevent airbnb-base from overriding some config from airbnb
        ...eslintConfig.rules,
        'jsx-a11y/anchor-is-valid': ['error', {
            'components': ['Link'],
            'specialLink': ['to'],
            'aspects': ['noHref', 'invalidHref', 'preferButton']
        }],
        'jsx-quotes': ['error', 'prefer-double'],
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'react/require-default-props': 'off',
    },
};
