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
      toast('Task edited', {
        icon: '✔️',
      });
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
  position="top-right"
  reverseOrder={false}
/><div className="todo-app container my-3 mt-5">
        <h1 style={{textAlign: "center"}}>Todo List</h1>
      <form className="form d-flex justify-content-between" onSubmit={handleList}>
          <input className="form-control form-control-lg"
            type="string"
            name="task"
            onChange={handleChange}
            placeholder="edit a task"
            value={todo.task}
            />
          <button className="btn btn-light"  
          type="submit"
          onClick={handleList}
          ><i class="bi bi-check2-square"></i>  
          </button>        
        </form>
              </div>
        </>       
    )}
