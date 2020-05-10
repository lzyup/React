import React from 'react'
export default function Welcome(props){
    const target = { a: 1, b: 2 }
    const source = { b: null, c: 5 }

    const returnedTarget = Object.assign(target, source)
    let arr1 = [1,2,4,7];
    let arr2 = [3,8,9];
    let flag2 = arr2.some((item,i)=>{
        arr1.some((e,j)=>{
            if(e==1){
                return true
            }
           
        })
       
    })
    let flag =  arr1.some((e,index)=>{
         return e===7;  
    })
    // target // { a: 1, b: 4, c: 5 }
    // returnedTarget // { a: 1, b: 4, c: 5 }
    target.a = 'lzy';
    // console.log(target,returnedTarget)
    return <h1>Hello, {props.name}</h1>
}