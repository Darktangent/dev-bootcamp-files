var b=  'can i access this'
function bb(){
    var a='hello'
    console.log(b)
}
bb()

//Root Scope window

var fun = 5

function funFunction(){

    var fun = "hello"
    console.log(1, fun)
}

function funerFunction(){

    var fun = "Byee"
    console.log(2, fun)
}
function funiestFunction(){

     fun = "AHHHHH"
    console.log(3, fun)
}
console.log("window",fun)
funFunction()
funerFunction()
funiestFunction()