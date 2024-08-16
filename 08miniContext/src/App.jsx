
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/userContextProvider'

function App() {
  

  return (
    <UserContextProvider> 
     <h1>Welcome to ContextApi Class</h1>
     <Login />
     <Profile />
    </UserContextProvider>
  )
}

export default App


// // store like userContextProvider toh ban gya pr uska access yaha denge taki use ho line 11