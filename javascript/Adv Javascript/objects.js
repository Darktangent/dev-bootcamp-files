//reference type

var object1 = {value :10}
var object2= object1
var object3 ={value:10}
//context
const object4 = {
    a:function(){
        console.log(this);
    }
}
//instantiation
class Player{
    constructor(name,type){
        this.name=name
        this.type=type
    }
    introduce(){
        console.log (`Hi I am ${this.name}, i am ${this.type}`)
    }
}

class Wizard extends Player {
    constructor(name,type){
        super(name,type)
    }
    play (){
        console.log(`I am a {this.type}`)
    }
    
}
const wizard1 = new Wizard ('Shelly', 'Healer')
const wizard2 = new Wizard ('Ryan', 'Dark Magik')
//ES7
'hello',includes('o')

const pets =  ['cat','dog']
pets.includes ('bird')

// es8
'Dog'.padStart(10)
'Cat'.padEnd(10)

const fun= (a,b,c,d,)=>{
	console.log(a)
}

Object.values
object.entries

let obj = {username :"Santa", username1:"Rudolf"}
object.keys(obj).forEach((element,index) => {
	console.log(element,obj[element])
	
});

Object.values(obj).forEach(values =>{
	console.log(values)
})

Object.entries(obj).forEach(values =>{
	console.log(values)
})

Object.entries(obj).map(values=>{
	return values[1] + values[0].replace('username','')
})

const filterArr = [0,1,2,3,4,5].reduce((a,b)=>{
    return  a.concat(b)
},[100]
    )




