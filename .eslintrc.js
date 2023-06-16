module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        'plugin:vue/vue3-essential',
        'eslint:recommended',
        '@vue/eslint-config-typescript',
    ],
    rules: {
        'vue/multi-word-component-names': 'off',
        'no-trailing-spaces': 'error',
        'vue/script-indent': [
            'error',
            4,
            {
                'baseIndent': 1
            }
        ],
        'indent': [
            'error',
            4,
            {
                'SwitchCase': 1
            }
        ],
        'eol-last': [
            'error',
            'always'
        ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'never'
        ],
        'no-mixed-spaces-and-tabs': [
            'error',
            'smart-tabs'
        ],
        'no-multiple-empty-lines': [
            'error',
            {
                'max': 1
            }
        ],
        'object-curly-spacing': [
            'error',
            'always'
        ],
    },
    'overrides': [
        {
            'files': ['*.vue'],
            'rules': {
                'indent': 'off'
            }
        }
    ]
}
