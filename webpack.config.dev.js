const path=require('path');
const webpack=require('webpack');
// export default{
//     entry: path.join(__dirname,'/client/index'),
//     output:{
//         path:'/'
//     },
//     module:{
//         loaders:[
//             {
//                 test:/\.js$/,
//                 include:path.join(__dirname,'client'),
//                 loaders:['babel']
//             }
//         ]
//     },
//     resolve:{
//         extensions:['','.js']
//     }
// }

module.exports= {
    entry: 
    // 'webpack-hot-middleware/client',
    path.join(__dirname, '/client/index.js')
  ,
  output:{
        path:'/',
        filename:'bundle.js'
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                include:path.join(__dirname,'client'),
                // loaders:['babel'],
                use:'babel-loader'
            }
        ]
    },
    resolve:{
        extensions:['.js']
    }

}