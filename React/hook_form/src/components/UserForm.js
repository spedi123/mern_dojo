import React, {useState} from 'react'

const UserForm = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const[firstNameError, setFirstNameError] = useState("");
    const[lastNameError, setLastNameError] = useState("");
    const[emailError, setEmailError] = useState("");
    const[passwordError, setPasswordError] = useState("");
    const[confirmPasswordError, setConfirmPasswordError] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = {firstName, lastName, email, password, confirmPassword}
        console.log(newUser)
    }

    const handleName = (targetValue, targetName) => {
        
        if (targetName === "firstName") {
            setFirstName(targetValue);
            if (targetValue.length < 2 && targetValue.length !== 0) {
                setFirstNameError("Last Name must be at least 2 characters");
            } else if (targetValue.length > 2 || targetValue.length === 0) {
                setFirstNameError("")
            }
        }

        if (targetName === "lastName") {
            setLastName(targetValue);
            if (targetValue.length < 2 && targetValue.length !== 0) {
                setLastNameError("Last Name must be at least 2 characters");
            } else if (targetValue.length > 2 || targetValue.length === 0) {
                setLastNameError("")
            }
        }

        if (targetName === "email") {
            setEmail(targetValue);
            if (targetValue.length < 2 && targetValue.length !== 0) {
                setEmailError("Email must be at least 5 characters");
            } else if (targetValue.length > 2 || targetValue.length === 0) {
                setEmailError("")
            }
        }

        if (targetName === "password") {
            setPassword(targetValue);
            if (targetValue.length < 8 && targetValue.length !== 0) {
                setPasswordError("Last Name must be at least 8 characters");
            } else if (targetValue.length > 2 || targetValue.length === 0) {
                setPasswordError("")
            }
        }

        if (targetName === "confirmPassword") {
            setConfirmPassword(targetValue)
            if (targetValue !== password) {
                setConfirmPasswordError("Passwords must match");
            } else if (targetValue === password || targetValue.length === 0) {
                setConfirmPasswordError("");
            }
        }
    }

    return (
        <div>
            <form onSubmit={ createUser }>
                <div>
                    <label>First Name: </label>
                    <input type="text" name="firstName" onChange={ (e) => handleName(e.target.value, e.target.name)}/>
                    { firstNameError ? <p>{ firstNameError }</p> : ""}
                </div>
                <div>
                    <label>Last Name: </label>
                    <input type="text" name="lastName" onChange={ (e) => handleName(e.target.value, e.target.name)} value={ lastName }/>
                    { lastNameError ? <p>{ lastNameError }</p> : ""}
                </div>
                <div>
                    <label>Email: </label>
                    <input type="text" name="email" onChange={ (e) => handleName(e.target.value, e.target.name)} value={ email }/>
                    { emailError ? <p>{ emailError }</p> : ""}
                </div>
                <div>
                    <label>Password: </label>
                    <input type="text" name ="password" onChange={ (e) => handleName(e.target.value, e.target.name)} value={ password }/>
                    { passwordError ? <p>{ passwordError }</p> : ""}
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="text" name="confirmPassword" onChange={ (e) => handleName(e.target.value, e.target.name)} value={ confirmPassword }/>
                    { confirmPasswordError ? <p>{ confirmPasswordError }</p> : ""}
                </div>
                <button type="submit">Submit</button>
            </form>
            <p>Frist Name : {firstName}</p>
            <p>Last Name : {lastName}</p>
            <p>Email : {email}</p>
            <p>Password  : {password}</p>
            <p>Confirm Password  : {confirmPassword}</p>
        </div>
    )
}

export default UserForm;