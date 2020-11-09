import logo from "./logo.svg";
import "./App.css";
import {useEffect} from 'react'
import { addTodoItem, deleteTodoItem , createTodoItem, loadTodoItem} from "./data/reducers/todo.reducer";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

function App() {
  useEffect(() => {
    loadTodoItem()
  })
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todoReducer).todoList;
const [todoTitle,setTodoTitle] = useState("");
  const deleteTodo = (id) => {
    let todoToDelete = {
      id: id
    };
    dispatch(deleteTodoItem(todoToDelete));
  };

  const addTodo =async () =>{
    let todo = {
      title : todoTitle
    }
    try {
     let response = await dispatch(createTodoItem(todo));
    //  console.log(response);
    } catch (error) {
      console.log("error",error);
    }
    // dispatch(addTodoItem(todo))
    setTodoTitle("")
  }
  const onchange = (e) =>{
   setTodoTitle(e.target.value)
  //  console.log(todoTitle);
  }
  return (
    <div className="App">
      <input type="text" value={todoTitle} onChange={onchange} name="todoTitle" />
      <button onClick={e=>{addTodo();}} >Add Todo</button>
      {console.log(todoList)}
      {todoList.length > 0 ? todoList.map((item) => (
        <div id={item.id}>
           {item.title}{" "}
          <button
            onClick={(e) => {
              deleteTodo(item.id);
            }}
          >
            X
          </button>
        </div>
      )): <p>You have no todos</p> }

    </div>
  );
}

export default App;
