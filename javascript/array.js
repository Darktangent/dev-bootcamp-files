var list =['tiger','cat','bear','bird']
list.forEach((e,i)=>{

	console.log(e,i)
})
var array = [1,2,3,4,5]
const double = []
let newArray=array.forEach((num,i)=>{
	double.push(num*2)
})

console.log(newArray)
console.log(double)
// map, filter, reduce

const mapArray=array.map((num)=>{
	return num *2
})
console.log(mapArray)

const filterArray = array.filter(num=>{

	return num>5
})
console.log(filterArray)

const reduceArray=array.reduce((accumulator, num)=>{
	return accumulator+num
},0)
console.log(reduceArray,'reduce')
