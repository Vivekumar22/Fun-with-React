import {createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {  // initial state of store how it look like
    todos: [{id: 1, text: "Hello world"}]
}


// jab v export karenge toh dono karna hoga
export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {                                 // property: function yahi bs aata hai reducers mein aur reducers ek object hai
        addTodo: (state, action) => {           // state toh bs initial state mein on that time kya hai ussi ka access deta hai like if that time 10 todo hai 10 dega
            const todo = {                      // action se id aur value type data milega jo user dega
                id: nanoid(), 
                text: action.payload            // payload like a object you can extract whatever you want
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload )
        },
    }
})

export const {addTodo, removeTodo} = todoSlice.actions // yeh components mein kaam aaega

export default todoSlice.reducer    // yeh store ko batane ke liye ki ek reducer hai toh use iska knowledge ho jaega