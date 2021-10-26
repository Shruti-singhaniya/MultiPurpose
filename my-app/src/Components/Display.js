import React from 'react'

export default function Display(props) {
  const deleteHandler=()=>{
      props.deleteItem()
  }
    return (
        <div style={{padding:'10px'}}>
            <h2>{props.title}</h2>
            <p>{props.content}</p>
            <button onClick={deleteHandler} style={{border:'2px solid red',padding:'10px',borderRadius:'20px'}}>-</button>
        </div>
    )
}
