
// 普通暴露数据
export let name='z';
export function fn(){
    console.log("hello");
    
}



//模块引入
 import * as mk1 from "./模块化.js";
 console.log(mk1);

 //as：起别名
 //*代表引入模块中所有的内容