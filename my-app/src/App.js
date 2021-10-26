import Error from './Components/Error';
import SignUp from './Components/SignUp'
import Add from './Components/Add';

import Footer from './Components/Footer'
import React,{useState,useEffect} from 'react'
import TodoList from "./Components/Todo/TodoList";
import Navbar from "./Components/Navbar";
import {Route,Switch} from 'react-router-dom'
import LoginForm from './Components/LoginForm';
import Dashboard from './Components/Dashboard';
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from '@firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCAFtODD1LL7xC7Hj1d-oPyMJwyz7n5-xQ",
  authDomain: "image-finder-53c95.firebaseapp.com",
  projectId: "image-finder-53c95",
  storageBucket: "image-finder-53c95.appspot.com",
  messagingSenderId: "267351200025",
  appId: "1:267351200025:web:e0445d848545a30c5af588",
  measurementId: "G-5X7LPDQGC0"
};
 initializeApp(firebaseConfig);
function App() {
  const [storeData, setstoreData] = useState([])
  const onAdd=(prevData)=>{
    // alert('i got clicked')
    setstoreData([prevData,...storeData])
  }
 const onDelete=(index)=>{
   const updatedArray=storeData.filter((item,i)=>{
     return i!==index
   })
   setstoreData(updatedArray)
 }
// setstoreData(setData)
const [user, setuser] = useState(null)
  useEffect(()=>{
    const auth=getAuth()
    onAuthStateChanged(auth,user=>{
setuser(user)
    })
  })
  return (
    <>
    <Navbar/>
<Switch>
  <Route path='/login'><LoginForm/></Route>
  <Route path='/signup'><SignUp/></Route>

  <Route path='/dashboard' exact><Dashboard/></Route>
  <Route path='/dashboard/todo' exact><TodoList/></Route>
  <Route path='/dashboard/notes' exact><Add onPass={onAdd}/></Route>
  <Route path='*' ><Error/></Route>
</Switch>
<Footer/>
  
  
 
</>
  );
}

export default App;
