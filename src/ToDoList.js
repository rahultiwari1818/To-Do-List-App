import React from 'react'
import './ToDoList.css';
export default function ToDoList(props) {
  return (
    <>
    <li className='my-2'><button 
    className='btn-rounded mx-2'
     onClick={()=>{
      props.onSelect(props.id);
     }}>
      Delete
      </button>
      {props.item}
      </li>
    </>
  )
}
