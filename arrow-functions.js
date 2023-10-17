/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
function addTwoNumbers (a,c) {
return a + c ; 
}
let result = addTwoNumbers (5, 6)
console.log (result); 
// Arrow Function With Parameters
const addTwoNumbersarrow (b,d) => {
    return b + d ; 
    }
    let Results = addTwoNumbersarrow (9, 6)
    console.log (Results); 
// Single Line Arrow Function With Parameters
const add2Numbers (b, c) => b+c; 
let sum = addTwoNumbers (10, 33)
console.log (sum); 
// Implicit Returns
const saySomething = message => console.log(message); 
saySomething('Hello this is a test!'); 

const sayHello = () => console.log('Hi'); 
sayHello(); 
// Returning Multiple Lines
const returnMultipleLines =() => (
    `<p>
    This is a string of text! 
    </p>`
)
console.log (returnMultipleLines); 

