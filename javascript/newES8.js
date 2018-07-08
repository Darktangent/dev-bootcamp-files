padStart()
.padEnd()


//trailing commas
const fun=(a,b,c,d,)=>{
  console.log(a)
}

fun(1,2,3,4,)

// object.values
// object.entries
// object.keys
let obj = {
  username :'santa',
  username1: 'tudo',
  username:'mr Grinch'
}

Object.keys(obj).forEach((key,index)=>{
  console.log(key, obj[key])
})

Object.values(obj).forEach(value=>{
  console.log(value)
})

Object.entries(obj).map(value=>{
  return value[1] + value[0].replace('username','')
})


//Async Await
