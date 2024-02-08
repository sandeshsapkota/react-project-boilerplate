module.exports = {
    root: true,
    env: {browser: true, es2020: true},
    extends: [
        "airbnb",
        "airbnb/hooks",
        'airbnb-typescript',
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended"
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs', ".prettierrc.js"],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: "./tsconfig.json"
    },
    plugins: ['react', 'react-refresh',],
    rules: {
        'react-refresh/only-export-components': [
            'warn',
            {allowConstantExport: true},
        ],
        "import/extensions": [
            "error",
            "ignorePackages",
            {
                "": "never",
                "js": "never",
                "jsx": "never",
                "ts": "never",
                "tsx": "never"
            }
        ],
        "react/react-in-jsx-scope": "off",
        "@typescript-eslint/no-unused-expressions": "off",
        "react/function-component-definition": "off",
        "@typescript-eslint/naming-convention": [
            "error",
            {
                "selector": "variable",
                "types": ["boolean"],
                "format": ["PascalCase", "snake_case", "camelCase"]
            }
        ],
        "react/button-has-type": "off",
        'prettier/prettier': 'error',
        "react/jsx-props-no-spreading": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "react/require-default-props": "off",
        "import/prefer-default-export": "off",
        "no-param-reassign": 0,
        "import/no-extraneous-dependencies": "off",
        "@typescript-eslint/no-shadow": "off"
    },
}
