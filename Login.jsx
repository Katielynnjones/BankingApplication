import { useState } from 'react';
import { useBankContext } from "./BankContext";

const Login = () => {
    
    const {bank, setLoggedInUser} = useBankContext(); //pulling two things from global state (useBankContext).

    //these are local state items. Global state is only needed if multiple components need it. Otherwise, it can be local like it is here. 
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = (event) => {
        const {name, value} = event.target;
        if (name === 'username') {
            setUsername(value);
        } else {
            setPassword(value);
        }
    }

    //handleSubmit function is fired when submit button is pressed, in this case the login button
    //forms require "event" as the parameter and the event.preventDefault to prevent refreshing of form
    const handleSubmit = (event) =>{
        event.preventDefault();

        setErrorMessage(''); //clears out error message
        setSuccessMessage(''); //clears out success message

        const user = bank.users.find(user => user.username === username); //.find tries to find element in an array based on a criteria, when true it will return element
        if (!user) {
            setErrorMessage('Could not find user...');
            return;
        }
        if (user.password !== password){
            setErrorMessage('Incorrect password!');
            return;
        }
        setLoggedInUser(username); //executes the function
        setSuccessMessage('You successfully logged in!');
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="fs-2">Login</div>
            <div className='mb-3'>
                <label htmlFor='exampleInputUsername' className='form-label'>Username</label>
                <input 
                type ="text"
                className='form-control'
                id="exampleInputUsername"
                name ="username"
                value ={username}
                onChange={handleChange} />
            </div>
            <div className='mb-3'>
                <label htmlFor="exampleInputPassword" className='form-label'>Password</label>
                <input
                type="text"
                className='form-control'
                id="exampleInputPassword"
                name="password"
                value={password}
                onChange={handleChange} />
            </div>
            <button type="submit" className='btn btn-primary'>Login</button>
            {errorMessage && (
                <div className='mt-2 alert alert-success' role='alert'> {successMessage}</div>
            )}
            <p>LoggedIn User: {bank.loggedInUser}</p>
        </form>
    )
}


export default Login;