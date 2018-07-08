var database = [
    {
        username: "andrei",
        password:"password"
    },
    {
        username: "sally",
        password:"password"
    },
    {
        username: "ingrid",
        password:"password"
    },
    {
        username: "esha",
        password:"password"
    }


];

var newsFeed = [

    {
        username:"Bobby",
        timeline:"So tired from all that learning"
    },
    {
        username:"Sally",
        timeline: "Javascript is so cool"
    }

]


var userNamePrompt=prompt("Whats your username");
var passwordPrompt=prompt("Whats your password");

// creating a new function to see if userValid

function isValidUser(username,password){
    for(var i=0; i<database.length; i++){
        if (database[i].username==username &&
            database[i].password==password){
                return true;
            }
            } return false;
    }





function signIn(username, password) {

    if (isValidUser(userNamePrompt,passwordPrompt)){
        console.log(newsFeed);
        alert (`Welcome to our social platform `+ userNamePrompt);

    } else {
        alert("Sorry, invalid username and password combination")
    }

    // if (user===database[0].username &&
    //      pass===database[0].password){
    //      console.log(newsFeed)
    //      }else {
    //          alert("Sorry wrong username and password");
    //      }
}

signIn(userNamePrompt,passwordPrompt)
