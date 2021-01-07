module.exports = {
    extends: [
        require.resolve('@thetribe/eslint-config'),
        'plugin:import/typescript',
    ],
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint',
    ],
    rules: {
        // Replace base eslint rules with rules from typescript-eslint
        '@typescript-eslint/no-shadow': ['error'],
        '@typescript-eslint/no-unused-vars': ['error'],
        'no-shadow': 'off',
        'no-unused-vars': 'off',
        // Add ts to allowed extensions
        'import/extensions': ['error', 'ignorePackages', {
            cjs: 'never',
            js: 'never',
            mjs: 'never',
            ts: 'never',
        }],
    },
    settings: {
        'import/extensions': [
            '.cjs',
            '.js',
            '.mjs',
            '.ts',
        ],
    },
};
