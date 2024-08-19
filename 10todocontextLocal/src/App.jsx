import { useState,useEffect } from 'react'
import './App.css'
import { TodoProvider } from './context'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {
  const [todos, setTodos] = useState([]) // here todos itself a object of array

  const addTodo = (todo)=>{ //  yeh todo form se milega aur yah ek object hai just string nhi,  n ki todos se
    setTodos((prev) => [{id:Date.now(), ...todo},...prev]) // ... means bring all object and spread
  }


  // both filter and map making callback filter return array with true/false at every iteration
  const updateTodo = (id,todo)=>{
    setTodos((prev) => prev.map((prevTodo)=>(prevTodo.id === id ? todo : prevTodo)))
  }

  const deleteTodo =(id)=>{
    setTodos(prev =>prev.filter((todo)=> todo.id !== id)) // that filter function returns a new array which don't have the given id
  }

  const toggleComplete =(id)=>{
    setTodos((prev)=>prev.map
    ((prevTodo)=>prevTodo.id === id? {...prevTodo, completed:!prevTodo.completed}:prevTodo))
  }


  // localStorage value string format mein rakhta hai so jab v lena hoga JSON mein convert karenge
  // hume jaise hi browser load ho toh store value v toh display karana hai toh isse useEffect mein

  // yeh to bs value scrreen pr de rha hai pr hume addTodo jab ho toh add v toh localstorage mein
  // karna hai so we can do this in same useEffect but then get also run so better to make another useEffect
  useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem("todos")) 
    if(todos && todos.length>0){
      setTodos(todos)
    }
  },[])

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])

  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
          <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo)=>(
                          <div key={todo.id} className='w-full'>
                            <TodoItem todo={todo} />
                          </div> //yaha hume differnt chahiye may be two todo's ek hi jaise ho toh dom ko differntiate karnne ke liye 
                        ))} 
                    </div>
                </div>
          </div>
    </TodoProvider>
  )
}

export default App
