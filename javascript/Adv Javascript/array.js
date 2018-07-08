const array = [1,2,3,4,50,100]
const double = []
const newArray = array.forEach((num)=>{
    double.push(num*2)
})

console.log (double)

//map

const mapArray=array.map((num)=>{return num*2})

console.log(mapArray)


//filter
const filterArray = array.filter((num)=>{
    return num >5
})
console.log(filterArray)

//reduce

const reduceArray = array.reduce((acc,num)=>{

    return acc+num
}, 1)
console.log(reduceArray)