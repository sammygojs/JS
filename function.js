function greet(name){
    console.log(`Hello ${name}`)
}
//greet(`sumit`)

//function expression
var sum = function add(x,y){
    return x+y;
}
//console.log(sum(1,2))

//anonymous function
sum = function(x,y){
    return x+y;
}
//console.log(sum(1,2))

//arrow functions in es6. Arrow functions are always anonymous functions and a type of function expression.
sum = (x,y) =>{
    return x+y
}
//console.log(sum(1,2))

//In the case of only one parameter, the parentheses can be excluded
sqr = x =>{
    return x*x;
}
//console.log(sqr(2))

//If the function is only a single line return, both the curly brackets and the return statement can be omitted
sqr = x => x*x*x
//console.log(sqr(2))