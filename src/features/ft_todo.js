import { createSlice } from "@reduxjs/toolkit";

const initilTodos = [];

const toDoSlicer = createSlice({
  name: "myTodo",
  initialState: {value:initilTodos},
  reducers:{
    addTodos:(state, action)=>{
      if(action.payload.trim().length)
      state.value= [...state.value,{id: Date.now(),doing:action.payload,isDone:false}];
    },
    deleteTodos:(state, action)=>{
        state.value= state.value.filter(todo=>todo.id!== action.payload)
    },
    checkTodos:(state, action)=>{
        state.value= state.value.map(todo=>todo.id===action.payload?{...todo,...{isDone:!todo.isDone}}:todo)
    },
  }
});

export const {addTodos,deleteTodos, checkTodos}= toDoSlicer.actions

export default toDoSlicer.reducer