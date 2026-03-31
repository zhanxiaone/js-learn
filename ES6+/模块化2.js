
//默认暴露
export default {
    position:'school',
    fn:function(){
        console.log("hello!");
        
    }
}


//统一暴露
let school='xxx';
function fn2(){
    console.log(123);
    
}
export {school,fn2}



//以上语法都可以
