//condition ? expr1 :expr2

function isUserValid(bool){
    return bool

}

var answer = isUserValid(false) ? "Enter":"Access Denied"

isUserValid(true)
console.log(answer)

// Switch

function moveCommand(direction){
    var whatHappens
    switch (direction) {
        case "forward":
            whatHappens = "You encounter a monster"
            break;
    
        case "back":
            whatHappens = "You encounter a troll"
            break;
    
        case "left" :
            whatHappens = "You fall asleep"
            break;
        default :
        whatHappens= "enter a valid direction"

    }
    return whatHappens
        
    }




moveCommand('left')