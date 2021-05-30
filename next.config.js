const { i18n } = require('./next-i18next.config')
const withLess = require('@zeit/next-less');

// fix: prevents error when .less files are required by node
if (typeof require !== 'undefined') {
    require.extensions['.less'] = file => {};
}

module.exports = withLess({
    i18n,
    lessLoaderOptions: {
        javascriptEnabled: true,
    },
})
