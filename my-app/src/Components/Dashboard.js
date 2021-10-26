import { getAuth } from '@firebase/auth'
import React,{useEffect} from 'react'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import './Dashboard.css'
export default function Dashboard() {
    const history=useHistory()
    const logout=()=>{
    localStorage.removeItem('token')
            history.push('/login')
}
useEffect(()=>{
const token=localStorage.getItem('token')
if(!token){
    history.push('/login')
}
},[])
const auth=getAuth();
const user=auth.currentUser
    return (
        <div className='dashboard'>
            <h2 style={{textAlign:'center',padding:'20px'}}>Hello {user && user.displayName}</h2>
           
            <ul className='dash-list'>
           <li> <Link to='/dashboard/todo' >Todo-app</Link></li>
           <li> <Link to='/dashboard/notes'>Notes-App</Link></li>
            </ul>
            <div>
            <button onClick={logout}>Logout</button>
            </div>
           
        </div>
    )
}
