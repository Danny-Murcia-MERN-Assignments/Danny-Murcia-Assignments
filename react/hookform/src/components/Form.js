import React, {useState} from 'react';


const Form = (props) => {


const [userList, setUserList] = useState([]);
const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");

const submitHandler = (e) => {
    //preventing the page reload which would clear state:
    e.preventDefault();

    setUserList([...userList,
    {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        confirmPassword: confirmPassword
    }
    ])
    console.log("submitted");
}


    return(
        <div>
            
            <h1>Register User</h1>

            <form onSubmit={(e) => submitHandler(e)}>
                <div>
                    <label>First Name</label>
                    <input onChange = {(e)=>{
                        console.log(e);
                        console.log(e.target);
                        console.log(e.target.value);
                        setFirstName(e.target.value);
                    }} type = "text"></input>
                    {
                        firstName.length > 0 && firstName.length < 2? 
                        <p>First name must be at least 2 characters.</p>
                        :null
                    }
                </div>
<br></br>
                <div>
                    <label>Last Name</label>
                    <input onChange = {(e)=>{
                        console.log(e);
                        console.log(e.target);
                        console.log(e.target.value);
                        setLastName(e.target.value);
                    }}type = "text"></input>
                    {
                        lastName.length > 0 && lastName.length < 2? 
                        <p>Last name must be at least 2 characters.</p>
                        :null
                    }
                </div>
                <br></br>
                <div>
                    <label>Email</label>
                    <input onChange = {(e)=>{
                        console.log(e);
                        console.log(e.target);
                        console.log(e.target.value);
                        setEmail(e.target.value);
                    }} type = "text"></input>
                    {
                        email.length > 0 && email.length < 5? 
                        <p>Email must be at least 5 characters.</p>
                        :null
                    }
                </div>
                <br></br>
                <div>
                    <label>Password</label>
                    <input onChange = {(e)=>{
                        console.log(e);
                        console.log(e.target);
                        console.log(e.target.value);
                        setPassword(e.target.value);
                    }} type = "password"></input>
                    {
                        password.length > 0 && password.length < 8? 
                        <p>Password must be at least 8 characters.</p>
                        :null
                    }

                </div>
                <br></br>
                <div>
                    <label>Confirm Password</label>
                    <input onChange = {(e)=>{
                        console.log(e);
                        console.log(e.target);
                        console.log(e.target.value);
                        setConfirmPassword(e.target.value);
                    }} type = "password"></input>
                {
                    confirmPassword.length>0 && password !== confirmPassword ? 
                    <p>Passwords must match.</p>
                    :null
                }
                </div>

            <button>Register</button>

            </form>


            <div>
                
                <h2>Your Form Data</h2>

                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm Password: {confirmPassword}</p>

                    {/* {
                        userList.map((user, index)=> {
                            return(
                                <div>
                                    <p>{user.firstName}</p>
                                    <p>{user.lastName}</p>
                                    <p>{user.email}</p>
                                    <p>{user.password}</p>


                                </div>
                            )
                        })
                    } */}


            </div>
            
        </div>
    )
};

export default Form;