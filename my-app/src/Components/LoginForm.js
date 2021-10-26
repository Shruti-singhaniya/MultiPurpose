import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import './LoginForm.css'
import { useHistory } from 'react-router'
import {getAuth,signInWithEmailAndPassword} from 'firebase/auth'
export default function LoginForm() {
  const [email, setemail] = useState('')
  const [pass, setpass] = useState('')
  const history=useHistory()
  useEffect(()=>{
    const token=localStorage.getItem('token')
    if(token){
        history.push('/dashboard')
    }
   },[])

const login=()=>{
const auth=getAuth()
signInWithEmailAndPassword(auth,email,pass)
.then((userCredentials)=>{
// when the user is auth ..so way to find if they are login then dont let them acces login and signup pages
localStorage.setItem('token',userCredentials._tokenResponse.idResponse);
history.push('/dashboard')
}).catch((error)=>alert(error.message))
}
  return (
    <div className='form'>
      <label>Email:</label>
      <input type="email" value={email} onChange={(e)=>setemail(e.target.value)} />
      <label>Password</label>
      <input type="password" value={pass} onChange={(e)=>setpass(e.target.value)}/>
      <button onClick={login}>Login</button>
      <div>
       <Link to='/signup'> No account? <span className="bold">Sign-Up</span></Link>
      </div>
      <div>
        <p>Want to change password? <Link to='/password'>Change Password</Link></p>
      </div>
    </div>
  )
}
