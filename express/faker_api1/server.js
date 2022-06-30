const express = require("express");
const app = express();
const port = 8000;

//install a previous working version of Faker with npm i faker@5.5.3 ! 
const faker = require("faker");

// import express from "express";
    
// req is shorthand for request
// res is shorthand for response
app.get("/api", (req, res) => {
    res.json({ message: "Hello Bubby" });
});


// this needs to be below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );


const createUser = ()=> {
    const user = {
        password: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.phoneNumber(),
        lastName: faker.name.lastName(),
        firstName: faker.name.firstName(),
        _id: faker.datatype.uuid()
    };
    return user;
};

const newUser = createUser();
console.log(newUser);


const createCompany = ()=> {
    const company = {
        _id: faker.datatype.uuid(),
        name: faker.random.word(),
        address: {
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    };
    return company;
};


const  newCompany = createCompany();
console.log(newCompany);


app.get("/api/users/new", (req, res) => {
    res.json({ newUser });
});


app.get("/api/companies/new", (req, res) => {
    res.json({ newCompany });
});

app.get("/api/user/company", (req, res)=> {
    res.json({newUser, newCompany});
});
