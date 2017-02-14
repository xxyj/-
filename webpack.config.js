var path = require('path');
var webpack = require("webpack");
var precss = require("precss")
var autoprefixer = require("autoprefixer")

console.log(path.resolve(__dirname,'./src/output/'));
module.exports = {
    entry:"./src/js/index.js",
    output:{
        path:path.resolve(__dirname,'./src/output/'),
        filename:'wue.js'
    },
    module:{
        loaders:[
            {
                test:/\.vue$/,
                loader:'vue-loader'
            },
            {
                test:/\.js$/,
                loader:'babel-loader',
                exclude:'/node_modules/',
                query:{
                    presets:['es2015']
                }
            },
            {
                test:/\.(png|jpg|jpeg|gif)$/,
                loader:'url-loader?limit=2500'
            },
            {
                test:/\.css$/,
                loader:'style-loader!css-loader!postcss-loader'
            }
        ]
    },
   /* resolve: {
        root: path.resolve('./')
    },*/
   /* plugins:{
        new webpack.LoaderOptionsplugin({
            options: {
                postcss: function (){
                    return [precss,autoprefixer];
                },
                devServer:{
                    contentVase: ".src/template",
                    colors:true,
                    inline:true,
                }
            }
        })
    }*/
}