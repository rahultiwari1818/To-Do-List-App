import React, { useState } from 'react'
import './App.css';
import ToDoList from './ToDoList';
const App = () =>{

    const [inputList,setInputList] = useState("");

    const [items,setItems] = useState([]);

    const itemEvent = (e) =>{
        setInputList(e.target.value);
    }

    const itemAdded = () => {
        setItems((oldData)=>{
            return [...oldData,inputList];
        });
        setInputList("");
    }


    const deleteItem = (id) =>{
        setItems((oldArray)=>{
            return oldArray.filter((ele,idx)=>{
                return idx!==id;
            })
        })
    }

    return <>
        <div className='main-div'>

            <div className='list-div'>

                <h1 className='text-center'>To-Do List</h1>

                <input type='text' placeholder='Enter Your to-do s' className='form-control' onChange={itemEvent} value={inputList}/>

                <button className='btn-rounded-warning my-2' onClick={itemAdded}>+</button>
                <ul className='my-2'>
                    {items.map((item,idx)=>{
                       return <ToDoList key={idx} item={item} id={idx} onSelect={deleteItem}/>
                    })}
                </ul>
            </div>
        </div>
    </>
}
export default App;