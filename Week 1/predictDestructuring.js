
//problem 1
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars 
const [ ,otherRandomCar] = cars

console.log(randomCar)
console.log(otherRandomCar)

//Answer: 
// Tesla
// Mercedes 
// Because the first destructuring selects the first index, it prints Tesla. Because the second destructuring selects the next index after skipping one index, it prints Mercedes. 


//problem 2 

const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;

console.log(name);
console.log(otherName);

//Answer:  name is not defined, because it has not been set equal to employee, which would destructure it. otherName would run successfully because it has been destructured, but because the previous line breaks, that line does not get run. 

//problem 3 

const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;

console.log(password);
console.log(hashedPassword); 

//Answer: password gets printed as 12345, but hashed password is undefined because password is not a key within the person object. 


//problem 4 

const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output
console.log(first == second);
console.log(first == third);

//Answer: because "first" is set to be the first number after skipping one index, first is 2. when we console.log first == second, we are checking whether 2 is equal to 5. this is false, so it prints false. in the second console.log, we are checking whether 2 is equal to 2 (because third is defined as the number that follows after skipping 8 indexes), and since this is true, the console prints true. 

//problem 5 

const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
//this is destructuring so that we can acess "key" directly. 
const { key } = lastTest;
//this is destructuring so we can access "secondKey" directly. 
const { secondKey } = lastTest;
//this selects the value after skipping one index... so, 5. 
const [ ,willThisWork] = secondKey;
//Answers: 
console.log(key);
// should print: value. 
console.log(secondKey);
//should print: 1, 5, 1, 8, 3, 3
console.log(secondKey[0]);
//should print: 1 
console.log(willThisWork);
//should print: 5 





