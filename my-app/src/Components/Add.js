import React,{useState} from 'react'
import Header from './Header'
import Display from './Display'

import './Notes.css'
export default function Add(props) {
    const [title, settitle] = useState('')
    const [content, setcontent] = useState('')
    const [expand, setexpand] = useState(false)
    const [storeData, setstoreData] = useState([])

    const titleHandler=event=>{
        settitle(event.target.value)
    }
    const contentHandler=event=>{
        setcontent(event.target.value)
    }
    const addHandler=(event)=>{
        event.preventDefault()
        const getData={
           newTitle:title,
           newContent:content
       };
       if(title.trim().length===0 || content.trim().length===0){
        return;
    }
    setstoreData([...storeData,getData])
 settitle('');
    setcontent('')
   }
   const delHandler=(index)=>{
       const delNote=storeData.filter((note,j)=>{
           return j!==index
       })
       setstoreData(delNote)
   }
  const expandIt=()=>{
      setexpand(true)
  }
  const normal=()=>{
      setexpand(false)
  }
    return (
        <div className='notes'>
        <Header/>
  
        <div onDoubleClick={normal} className='note-form'>
            <form>
               { expand?<input type="text" placeholder="Title" autoComplete="off" onChange={titleHandler} value={title}/>:null}
               <br/>
<textarea rows='' column='' placeholder="Write a note..." onChange={contentHandler} value={content} onClick={expandIt}></textarea><br/>
{ expand ?<button onClick={addHandler}>+</button> :null}

            </form>
        </div>
        <div className="boxes">
        {storeData.map((value,index)=>{
            return(
 <div className="box">
      <Display key={index} 
                title={value.newTitle}
                content={value.newContent}
                deleteItem={()=>delHandler(index)}/> 
 </div>
             
        

           
               
            )
        })}    
       

        </div>
       
       
       
       
        
        </div>

    )
}
