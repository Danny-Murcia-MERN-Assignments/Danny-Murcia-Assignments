function addTwoNumbers(a,b){
    return a + b;
}

//With this, you won't get anything printed because you're not console.logging. 
addTwoNumbers(4,3);

//This will print the return value of the function. 
console.log(addTwoNumbers(4,3));

//Another way of doing the same thing: 
const sum = addTwoNumbers(4,3);
console.log(sum);

const add = (a, b) => {
    return a + b;
};


console.log(add(3,2));
// prints 5



//Implicit Return // don't need to include a return statement.

const add1= (a, b) => a + b; 

const add2 = a => a + 10 

console.log(add(3,2));
//prints 5 

console.log(add2(2));
//prints 12 



const obj = {
    name: 'John',
    age: 30,
    stack: ['Python', 'MERN'],
    getName: ()=>{
        console.log(this.userName);
    }
};

console.log(obj.getName());


//Do not use ARROW function within an object. 

