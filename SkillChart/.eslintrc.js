module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended'
    ],
    plugins: ["@typescript-eslint", "prettier"],
    rules: {
        "prettier/prettier": "error",
        "linebreak-style": ["error", "unix"],
        "no-useless-constructor": "error",
        "no-unused-vars": "off",
        "@typescript-eslint/explicit-function-return-type": ["error"]
    },
    settings: {
        react: {
            version: 'detect'
        }
    }
};