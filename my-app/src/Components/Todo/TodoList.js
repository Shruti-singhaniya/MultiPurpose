import React,{useState} from 'react'

import './TodoList.css'
export default function TodoList() {
    const [todo, settodo] = useState('')
    const [storeTodo, setstoreTodo] = useState([])

    // console.log(parms.todoId)
    const todoHandler=(event)=>{
        settodo(event.target.value)
    }
    const addHandler=event=>{
        event.preventDefault();
        const getTodo={
            newTodo:todo
        }
        if(todo.trim().length===0){
            return(alert("Enter some value"))
        }
        setstoreTodo([getTodo,...storeTodo])
      settodo('')
    }
    const delTodo=(index)=>{
        const delItem=storeTodo.filter((item,i)=>{
return i!==index;
})
        setstoreTodo(delItem)
    }
    return (
        <div className="todos">
           
          <form>
              <h1>Todo app</h1>
              <div className="inputs ">
              <input type="text" value={todo} onChange={todoHandler} />
              <button onClick={addHandler}>Add todo</button>
              </div>
            </form> 
              {storeTodo.map((todos,index)=>{
                  return(
                      <div key={index} className="list">
                          <div className='display'>
                          <li>{todos.newTodo}</li>
                             <button onClick={()=>delTodo(index)}>delete</button>
                          </div>
                            
                      </div>
                     
                  )
              })} 
        </div>
    )
}
