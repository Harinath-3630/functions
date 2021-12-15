function nameOfFuction () {
    // operation
}  // th rules to write the name of a function is same as variable
console.log(typeof nameOfFuction)



function greet() {     
    console.log("hai everyone");
}
greet();     // calling of a function.


function greet(name){
    //console.log("hello" +" "+ name +""+ "how are you");
}
 


var name= prompt("enter your name:");
greet(name);

function add(a,b) {
console.log(a+b);
}

add(3,4);
add(4,7);

function add(a,b){
     // 
     return a+b ;
}
var result=add(3,4);
console.log("the addition of two numbers is" +" "+ result);
add(3,4);
add(4,7);