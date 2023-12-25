import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <>
            <div>
                <h1>Library Home page</h1>
                <Link to="/">Home</Link> <br />
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link> 
                <Link to="/cart">Cart</Link> 
                <button>Logout</button>
            </div>
        </>
    )
}