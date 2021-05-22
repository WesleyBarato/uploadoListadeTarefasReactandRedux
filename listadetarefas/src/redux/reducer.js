import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const addTodoReducer = createSlice({
    name: "todos",
    initialState,
    reducers:{
        //aqui vai ficar os reducers
        //adicionar tarefas
        addTodos:(state,action) => {
            state.push(action.payload);
            return state;
        },
        //remover tarefas
        removeTodos: (state,action) =>{
            return state.filter(item => item.id!== action.payload);
        },
        //atualizar tarefas
        updateTodos: (state,action) => {
            return state.map( todo => {
                if(todo.id === action.payload.id){
                    return {
                        ...todo,
                        item: action.payload.item,
                    }
                    
                }
                return todo;
            })
        },
        //completar tarefas
        completeTodos: (state,action) => {
            return state.map( todo => {
                if(todo.id === action.payload){
                    return {
                        ...todo,
                        completed:true,
                    }
                    
                }
                return todo;
            })
        }
    },
});

export const {addTodos, removeTodos, updateTodos, completeTodos} = addTodoReducer.actions;
export const reducer = addTodoReducer.reducer;