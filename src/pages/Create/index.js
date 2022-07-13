import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate} from "react-router-dom";
import style from "./style.module.css";
import { Cards } from "../../components/Cards";
import { Toaster, toast } from "react-hot-toast";



export function Create() {
  const [form, setForm] = useState([])
  const [todo, setTodo] = useState({
    task:"",
});
  console.log(todo)
  
  const navigate = useNavigate();

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
    toast('Task add', {
      icon: '👏',
    });
    e.preventDefault();
    try{
    await axios.post("https://ironrest.herokuapp.com/flavia-hotts", 
      todo,
          );
    navigate("/");
  } catch(err) {
    console.log(err);
  }
}

  return (
    <>
    <Toaster/>
    <div className="todo-app">
      <h1>Todo List</h1>
    <form onSubmit={handleList}>
        <input
          type="string"
          name="task"
          onChange={handleChange}
          placeholder="add a task"
          value={todo.task}
          // onChange={(e) => {
          // setTodo(e.target.value);
          // } } 
          />
        <button
          onClick={handleList}
        >
          Add
        </button>
      </form>
            </div>

            <div>            
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

