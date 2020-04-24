import React from 'react'
export default function Welcome(props){
    console.log('测试函数式组件的this',this);
    const target = { a: 1, b: 2 }
    const source = { b: null, c: 5 }

    const returnedTarget = Object.assign(target, source)
    let arr1 = [1,2,4,7];
    let arr2 = [3,8,9];
    let flag2 = arr2.some((item,i)=>{
        console.log('item',item)
        arr1.some((e,j)=>{
            console.log('吃e-->', e);
            if(e==1){
                return true
            }
           
        })
       
    })
    let flag =  arr1.some((e,index)=>{
        console.log('e',e);
         return e===7;  
    })
    console.log('测试flag---->', flag);
    console.log('测试flag2---->', flag2);
    // target // { a: 1, b: 4, c: 5 }
    // returnedTarget // { a: 1, b: 4, c: 5 }
    target.a = 'lzy';
    console.log(target,returnedTarget)
    return <h1>Hello, {props.name}</h1>
}