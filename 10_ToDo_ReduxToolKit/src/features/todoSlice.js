import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos : [{id:nanoid(), text:"Initial Todo"}]
}

export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodos:(state,action)=>{
            state.todos = [...state.todos, {text:action.payload, id:nanoid()}]
            },
        deleteTodos:(state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
            }
    }
                                                    
})

// Action creators are generated for each case reducer function 
export const {addTodos,deleteTodos}=todoSlice.actions

export default todoSlice.reducer