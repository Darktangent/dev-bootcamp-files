//reference type
var object1={val:10}
var object2=object1
var object3={val:10}
//context
const obj4={
  a:function(){
    console.log(this)
  }
}
//instantiation
class Person{
  constructor(name,type){
  this.name=name
  this.type=type}
  introduce(){

    console.log(`Hi I am ${this.name}, I am a ${this.type}`)
  }
}
sam = new Person
sam('rohan','male')
console.log(sam.introduce());

class wizard extends Person{
  constructor(name,type){
    super(name,type)
  }
  play(){
    console.log( `weee I am a ${this.type}`)
  }
}

const wiz = new wizard('shelly','healer')
