import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router'
import './LoginForm.css'
import {getAuth,createUserWithEmailAndPassword,updateProfile} from 'firebase/auth'
export default function SignUp() {
    const [username, setusername] = useState('')
    const [useremail, setuseremail] = useState('')
    const [userpass, setuserpass] = useState('')
    const history=useHistory()
    useEffect(()=>{
        const token=localStorage.getItem('token')
        if(token){
            history.push('/dashboard')
        }
       },[])
const signUpHandler=(event)=>{
    event.preventDefault()
    const auth=getAuth()
    createUserWithEmailAndPassword(auth,useremail,userpass)
    .then(()=>{
        updateProfile(auth.currentUser,{displayName:username})
        .then(()=>{history.push('/login')})
        .catch((error)=>alert(error.message))
    }).catch((error)=>alert(error.message))
}
    return (
        <div className='form'>
            <label>UserName</label>
            <input type="text" name='text' value={username} onChange={(e)=> setusername(e.target.value)}/>
            <label>Email</label>
            <input type="email" name='email' value={useremail} onChange={(e)=>setuseremail(e.target.value)}/>
            <label>Password</label>
            <input type="password" name="password" value={userpass} onChange={(e)=>setuserpass(e.target.value)} />
            <button type='submit' onClick={signUpHandler}>SignUp</button>
            <div>
           <Link to='/login'>     <p>Already have an account? <span style={{color:'green',fontWeight:'bold'}}>Log-In</span></p></Link>
            </div>
        </div>
    )
}
