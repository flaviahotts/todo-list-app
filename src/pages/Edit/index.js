import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";



export function Edit (){
    const {_id} = useParams()
    const [form, setForm] = useState([])
    const [todo, setTodo] = useState({
    task:"",
});
    console.log(todo)
    
    const navigate = useNavigate();

    useEffect(() => {
    async function fetchTodo(){
        const response = await axios.get(`https://ironrest.herokuapp.com/flavia-hotts/${_id}`)
      
      setForm([...response.data])
    }
    fetchTodo()
  },[])
  
  function handleChange(e) {
  
    e.preventDefault();
  
    setTodo({...todo, [e.target.name]: e.target.value });
  
    console.log(todo);
  
  }
  
    async function handleList(e) {
      toast.success('Done!')
      e.preventDefault();
      try{
        const clone = {...todo}
        delete clone._id
      await axios.put(`https://ironrest.herokuapp.com/flavia-hotts/${_id}`, 
        clone,
            );
      navigate("/");
    } catch(err) {
      console.log(err);
    }
  }
  
    return (
      <>
      <Toaster
  position="top-center"
  reverseOrder={true}
/><div className="todo-app">
        <h1>Todo List</h1>
      <form onSubmit={handleList}>
          <input
            type="string"
            name="task"
            onChange={handleChange}
            placeholder="edit task"
            value={todo.task}
            // onChange={(e) => {
            // setTodo(e.target.value);
            // } } 
            />
          <button 
          i class="bi bi-pencil-square"
          type="submit"
            onClick={handleList}
          >
            Edit
          </button>
        </form>
              </div>
  
              {/* <div>            
              {form.map((currentTodo) => {
                return (
                  <div key={currentTodo._id}>
                  <Cards task={currentTodo.task} id={currentTodo._id}/>
                  </div>
                )
              })} 
              </div> */}
  
  
  
              
              </>
        
    )}
