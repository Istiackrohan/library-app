import './App.css'
import { Link } from 'react-router-dom'

function App() {
  return (
    <>
      <div>
        <h1>Library Home page</h1>
        <Link to={`Login`}>Login</Link> <br/>
        <Link to={`Register`}>Register</Link>
      </div>
    </>
  )
}

export default App
