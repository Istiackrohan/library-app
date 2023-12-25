import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <>
            <div>
                <h1>Library Home page</h1>
                <Link to={`Login`}>Login</Link>
                <Link to={`Register`}>Register</Link> 
                <Link to={`Cart`}>Cart</Link> <br />
                <button>Logout</button>
            </div>
        </>
    )
}