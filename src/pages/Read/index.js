import { useState, useEffect } from "react";
import axios from "axios";
//import { Link } from "react-router-dom";
//import style from "./style.module.css";

export function Read() {
  const [todoList, setTodoList] = useState([]);
  console.log(todoList);

  useEffect(() => {
    async function fetchList() {
      try {
        const response = await axios.get(
          "https://ironrest.herokuapp.com/flavia-hotts"
        );
        console.log(response);
        setTodoList(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchList();
  }, []);

 // return (
    //<div>
         // <h1>Todo List</h1>
         // {todoList.map((currentTodoList) => {
          //  return (

            

}