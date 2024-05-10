// vue.config.js
module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'https://izzatbekmajidov2006.amocrm.ru',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                },
            },
        },
    },
};