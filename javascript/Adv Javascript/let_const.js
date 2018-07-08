// let const

// const player="Bobby"
// let experience=100;
// let wizardlevel=false
// if (experience>90){
//     wizardlevel=true
// }

//Destructuring
const obj = {
    player :"bobby",
    experience:100,
    wizardlevel:false

}
const {player,experience} = obj
let {wizardlevel} = obj

console.log(player)

// object properties
const name = 'John Snow'
const obj = {
    [name] : "hello",
    [1+2]:"hihi"
}

//arrow function

const add=(a,b)=>a+b;