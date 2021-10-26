import './Error.css'
import { Link } from 'react-router-dom'
export default function Error() {
    return (
        <div className="error">
           <p >WELCOME TO OU MULTIPURPOSE APP</p>
           <p>please <Link to='/login'><span style={{color:'red'}}>login</span></Link> to your account or 
           <Link to='/signup'><span style={{color:'red'}}> Sign-Up </span></Link>
           and create a new one!</p>
        </div>
    )
}
