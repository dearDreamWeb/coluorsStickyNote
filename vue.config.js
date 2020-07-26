module.exports = {
    publicPath: './',
    //修改或新增html-webpack-plugin的值，在index.html里面能读取htmlWebpackPlugin.options.title
    chainWebpack: config => {
        config.plugin('html')
            .tap(args => {
                args[0].title = "多彩便利贴";
                return args;
            })
    }
};