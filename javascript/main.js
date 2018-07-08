var todos = [
    "clean room",
    "brush teeth",
    "exercise",
    "study javascript",
    "eat healthy"

]
//for loop
 todoslength = todos.length;
// for (var i=0; i<todoslength; i++){
//     console.log(todos[i] + "!");
// //to change todos
//     todos[i]=todos[i]+"!";
// //to remove the todos 
// todos.pop();

// }

//while loop--while something

// var counterOne = 0;

// while (counterOne<todoslength){

//     console.log(todos[counterOne]);
//     counterOne++
// }

    function logTodos(todo, foo){
        console.log("function call: " , todo, foo)
    }

todos.forEach(function(todos, i){
    console.log(todos, i);
})

todos.forEach(logTodos);
console.log(`testing backtick: ${1+1}`)