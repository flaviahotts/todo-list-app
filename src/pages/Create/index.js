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
position="bottom-center"
reverseOrder={false}
/>

    <div className="todo-app container my-3 mt-5" >

      <h1 style={{textAlign: "center" }}>Todo List</h1>
    <form className="form d-flex justify-content-between" onSubmit={handleList}>
        <input className="form-control form-control-lg"
          type="string"
          name="task"
          onChange={handleChange}
          placeholder="type a task"
          value={todo.task}
        /> 
        <button className="btn btn-light" onClick={handleList}><i className="bi bi-plus-square"></i></button>       
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

