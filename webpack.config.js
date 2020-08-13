const path = require('path')
const VueLoaderPlugin =  require('vue-loader/lib/plugin')
module.exports={
    entry:path.join(__dirname,'src/index.js'),
    output:{
        filename:'bundle.js',
        path:path.join(__dirname,"dist")
    },
    module:{
        rules:[
            {
                test:/.vue$/,
                loader:'vue-loader'
            }

        ]
    },
    plugins:[
         new VueLoaderPlugin ()
            //将src下的template属性描述的文件根据当前配置的output.path，将文件移动到该目录
    ]

}