var path = require('path');
var webpack = require("webpack");
var htmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry:"./src/js/index.js",
    output:{
        path:path.resolve(__dirname,'./src/output/'),
        filename:'[name]-[hash].js'
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
    resolve: {
        extensions: ['.js','.vue'],
        //root:["../node_modules"],
        alias:{
            "vue":"./src/js/lib/vue.js"
        }
    },
    plugins:[
        new webpack.BannerPlugin("create by hzxiongxu"),
        new htmlWebpackPlugin({
            template:__dirname+"/src/template/index.html"
        }),
        new ExtractTextPlugin("[name]-[hash].css")
    ],
    /*postcss:[
        require("autoprefixer")
    ],*/
    devServer:{
        //contentVase: ".src/template",
        hot:true,
        historyApiFallback:true,
        inline:true,
        process:true,
    }
    /*scripts:{
      "start":"webpack-dev-server --hot --inline"
    }*/
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