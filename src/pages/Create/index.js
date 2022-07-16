import { useState, useEffect } from "react";
import axios from "axios";

import style from "./style.module.css";
import { Cards } from "../../components/Cards";
import { Toaster, toast } from "react-hot-toast";




export function Create() {
  const [form, setForm] = useState([])
  const [todo, setTodo] = useState({
    task:"",
});
  console.log(todo)
  
 
  useEffect(() => {
    async function fetchTodo(){
      const response = await axios.get("https://ironrest.herokuapp.com/flavia-hotts")
    
    setForm([...response.data])
  }
  fetchTodo()
},[])

function handleChange(e) {

  e.preventDefault();

  setTodo({ [e.target.name]: e.target.value });

  console.log(todo);

}

  async function handleList(e) {
    toast('Task added', {
      icon: '✔️',
    });
    e.preventDefault();
    try{
    await axios.post("https://ironrest.herokuapp.com/flavia-hotts", 
      todo,
          );
          window.location.reload()
    
  } catch(err) {
    console.log(err);
  }
}

  return (
    <>
    <Toaster
  position="top-center"
  reverseOrder={true}
/>
    <div className="todo-app container my-3">
      <h1>Todo List</h1>
    <form onSubmit={handleList}>
        <input
          type="string"
          name="task"
          onChange={handleChange}
          placeholder="read my new book"
          value={todo.task}
          // onChange={(e) => {
          // setTodo(e.target.value);
          // } } 
          />
        <button
          onClick={handleList}
        >
          Add the task
        </button>
      </form>
            </div>

            <div className="container my-3">            
            {form.map((currentTodo) => {
              return (
                <div key={currentTodo._id}>
                <Cards task={currentTodo.task} id={currentTodo._id}/>
                
                </div>
              )
            })} 
            </div>
            </>
  )}

