const path = require("path")

module.exports = {
    entry:"./index.js",
    mode:"development",
    resolve:{
        modules:['node_modules'],
        extensions:['.js']
    },
    module:{
        rules:[
            {
                test:/\.m?js$/i,
                exclude:/node_modules/,
                use:{
                    loader:"babel-loader",
                    options: {
            presets: ['@babel/preset-env']
          }
                }
            }
        ]
    },
    output:{
        filename:"bundle.js",
        path:path.resolve(__dirname,"dist")
    }
}