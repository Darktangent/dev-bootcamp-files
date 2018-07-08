// const first = ()=>
// {
//     const greet = 'Hi'
//     const second = ()=>{
//         alert (greet)
//     }
//     return second
// }
// const newFunc = first()
// newFunc()

//Currying

const multiply=(a,b)=> a*b
const curriedMultiply = (a)=>(b)=>a*b
const multiplyBy3= curriedMultiply(3)
multiplyBy3(3)

// Compose
const compose = (f,g)=>(a)=>f(g(a))

const sum =(num)=>num+1
compose(sum,sum)(5)