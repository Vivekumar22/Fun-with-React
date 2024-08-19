import {createContext, useContext} from "react"

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: " Todo msg",
            completed: false,
        }   // properties yeh jo upar wala hai yeh show nahi hoga just for understnading it given
    ],
    
    // functionalities without definition
    addTodo: (todo)=>{},
    updateTodo: (todo,id)=>{},
    deleteTodo:(id)=>{},
    toggleComplete:(id)=>{}
})

export const useTodo = () =>{
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider