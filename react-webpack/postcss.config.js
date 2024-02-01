/** @type {import('postcss-load-config').Config} */
const config = {
    plugins: {
        tailwindcss: {},
        'tailwindcss/nesting': {},
        'postcss-import': {},
        'autoprefixer': {},
        'postcss-nested': {}
    }
}

module.exports = config