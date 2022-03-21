import { useState } from "react";


const Form = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passConfirm, setPassConfirm] = useState("");
    const [firstNameError, setFirstNameError] = useState(
        "First Name must be at least 2 characters"
    );
    const handleNameInputChange = (e) => {
        setFirstNameError(e.target.value);
        if (e.target.value.length < 2) {
            setFirstNameError("First Name must be at least 2 characters");
        } else {
            setFirstNameError("");
        }
            
    }
    

    return (
        <div>    
            <form>        
                <div>
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" id="firstName" onChange={(e) => handleNameInputChange(e)}/>

                </div>
                
                <div>
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName" onChange={(e) => setLastName(e.target.value)}/>
                </div>
                {lastName.length < 2 ? <p>Last Name must be at least 2 characters</p>:null}
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" onChange={(e) => setEmail(e.target.value)}/>
                </div>
                {email.length < 5 ? <p>Email must be at least 5 characters</p>:null}
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" onChange={(e) => setPassword(e.target.value)}/>
                </div>
                {password.length < 8 ? <p>Password must be at least 8 characters</p>:null}
                <div>
                    <label htmlFor="passConfirm">Confirm Password</label>
                    <input type="password" id="passConfirm" onChange={(e) => setPassConfirm(e.target.value)}/>
                </div>
                {password === passConfirm ? null :"Passwords must match"}
                </form>

            <h4>First Name: {firstName}</h4>
            <h4>Last Name: {lastName}</h4>
            <h4>Email: {email}</h4>
            <h4>Password: {password}</h4>
            <h4>Confirm Password: {passConfirm}</h4>
        </div>
    )
}

export default Form;