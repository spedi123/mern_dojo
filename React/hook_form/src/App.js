import {useState} from "react" 

import './App.css';

function App() {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const createUser = (e) => {
    e.preventDefault();
    const newUser = {firstName, lastName, email, password, confirmPassword}
    console.log(newUser)
  }

  return (
    <div className="App">
       <form onSubmit={createUser}>
            <div>
                <label>First Name : </label>
                <input onChange={(e) => {setFirstName(e.target.value)}} type="text" value={firstName}></input>
            </div>
            <div>
                <label>Last Name : </label>
                <input onChange={(e) => {setLastName(e.target.value)}} type="text" value={lastName}></input>
            </div>
            <div>
                <label>Email : </label>
                <input onChange={(e) => {setEmail(e.target.value)}} type="text" value={email}></input>
            </div>
            <div>
                <label>Password : </label>
                <input onChange={(e) => {setPassword(e.target.value)}} type="password" value={password}></input>
            </div>
            <div>
                <label>Confirm Password : </label>
                <input onChange={(e) => {setConfirmPassword(e.target.value)}} type="password" value={confirmPassword}></input>
            </div>
            <button>Create</button>
        </form>
        <p>Frist Name : {firstName}</p>
        <p>Last Name : {lastName}</p>
        <p>Email : {email}</p>
        <p>Password  : {password}</p>
        <p>Confirm Password  : {confirmPassword}</p>
    </div>
  );
}

export default App;
