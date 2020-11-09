import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {createTodoItemAPI,loadTodoItemAPI} from '../services/todo.service'

export const createTodoItem = createAsyncThunk(
  '/todo/createTodoItem',
  async(payload,thunkAPI)=>{
    console.log(payload)
    let response = await createTodoItemAPI(payload);
    if(response.isSuccess) return response.data 
    else thunkAPI.rejectWithValue("Network call failed");
  }
)

export const loadTodoItem = createAsyncThunk(
  '/todo/loadTodoItem',
  async(payload,thunkAPI)=>{
    console.log(payload)
    let response = await loadTodoItemAPI(payload);
    if(response.isSuccess) return response.data 
    else thunkAPI.rejectWithValue("Network call failed");
  }
)

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todoList: [],
  },
  reducers: {
    addTodoItem: (state, action) => {
      state.todoList.push(action.payload);
    },
    deleteTodoItem: (state, action) => {
      state.todoList = state.todoList.filter(
        (item) => item.id !== action.payload.id
      );
    },
  },
  extraReducers:{
    [createTodoItem.fulfilled]:(state,action) =>{
      console.log(action.payload);
      state.todoList.push(action.payload)
    },
   
  }
});
export const { addTodoItem, deleteTodoItem } = todoSlice.actions;
export default todoSlice.reducer;
