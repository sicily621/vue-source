import babel from 'rollup-plugin-babel';
import serve from 'rollup-plugin-server';

export default {
    input: './src/index.js',
    output: {
        format:'umd',//amd commonjs规范 默认将打包后的结果挂载到window上
        file: 'dist/vue.js', //打包出的vue.js文件 new Vue
        name:'Vue',
        sourcemap:true
    },
    plugins:[
        babel({
            exclude:"node_modules/**"//排除文件
        }),
        serve({
            open:true,
            openPage:'/public/index.html',
            port:3000,
            contentBase:''
        })
    ]
}