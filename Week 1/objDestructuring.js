//DESTRUCTURING:

const obj = {
    name: 'John',
    age: 30,
    stack: ['Python', 'MERN'],
};


//destructuring an OBJECT : you use curly brackets. 
const { name, age } = obj;

console.log('Name:', name);
console.log('Age:', age);


//ARRAY DESTRUCTURING : you use square brackets. 

const arr = [1, 2, 3, 4, 5];
const [firstItem, , thirdItem] = arr;
const [first, , , , last] = arr;
console.log(firstItem);
console.log(thirdItem);

console.log('Last:', last);


//Spread Operator : we use an elipsis ... to get remaining keys in an object.  

const{stack, ...others} = obj;


//this gives us everything except for the stack. all other key value pairs. 
console.log(others);

const[firstIndex, ...rest] = arr;
console.log('First Index:', firstIndex);

//This will print "rest" of the values as an array. [2, 3, 4, 5]
console.log('Rest:', rest);
