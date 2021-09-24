//Scope
function checkScope() {
  var x = 1;
  let y = 2;
  const z = 3;

  {
    var x = 100;
    let y = 200;
    const z = 300;
    console.log("x in block scope is", x);
    console.log("y in block scope is", y);
    console.log("z in block scope is", z);
  }

  console.log("x outside of block scope is", x);
  console.log("y outside of block scope is", y);
  console.log("z outside of block scope is", z);

}

checkScope();


//Redeclaration
var x = 5;
var x;
console.log(x);

let y = 4;
let y; //Error
console.log(y);

const z = 3;
const z; //Error
console.log(z);

//Reassigned
var a1 = 10;
let a2 = 20;
const a3 = 30;

a1 = 100;
a2 = 200;
a3 = 300; //Error

console.log(a1);
console.log(a2);
console.log(a3);


//Hoisting
console.log("The value of a is " + a);
var a = 420;

console.log(b); //Error because b is in temporal dead zone
let b = "Mary"; 

console.log(c); //Error because c is in temporal dead zone
const c = "Jane"; 
