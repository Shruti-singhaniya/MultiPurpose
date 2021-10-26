import {NavLink} from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
   
    return (
        <>
       <div className="navbar">
           <h2 className="logo">Multi-Purpose-App</h2>
           <div className='list-items' >
               <ul>
               <li><NavLink to='./login'>Login</NavLink></li>
               <li><NavLink to='./Signup'>SignUp</NavLink></li>
                  <li><NavLink to='./dashboard'>Dashboard</NavLink></li>
                    </ul>
           </div>
          
       </div>
         </>  
        
    )
}
