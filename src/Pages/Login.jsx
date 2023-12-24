import { useState } from "react";

import { Link, Navigate } from "react-router-dom";

export default function Login() {
    // const [users, setUsers] = useState([]);
    // const [error, setError] = useState([]);
    const [isCredentialMatched, setIsCredentialMatched] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();

        const username = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;
        // try {
        //     let user = await 
        login(username, password);
        console.log(username, " ", password);
        // console.log(isCredentialMatched)
        // } catch (error) {
        //     setError(error);
        // }
    }

    const login = (username, password) => {
        if (username === 'rohan@abc.com' && password === '123') {
            setIsCredentialMatched(true);
        } else {
            setIsCredentialMatched(false);
        }
    }

    return (
        <>
            <h1>Login</h1>
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <p>Your Email</p> 
                    <input type="email" id="login-email" /> <br />
                    <p>Password</p>
                    <input type="password" id="login-password" /> <br />
                    <input type="submit" value="Login" /> <br />
                </form>
                {isCredentialMatched && <Navigate to="/admin"/>}
                <Link to={`/register`}>Do not have an account?</Link>
            </div>
        </>
    )
}