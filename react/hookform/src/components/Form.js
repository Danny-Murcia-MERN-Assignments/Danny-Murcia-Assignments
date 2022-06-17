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