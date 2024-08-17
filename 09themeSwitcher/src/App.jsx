import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './contexts/theme'
import Card from './components/Card'
import ThemeBtn from './components/ThemeBtn'


function App() {

    const [themeMode, setThemeMode] = useState("light")


    const darkTheme = ()=>{
        setThemeMode("dark")
    }

    const lightTheme = ()=>{
        setThemeMode("light")
    }

    // actual change in theme on screen
    useEffect(()=>{
        document.querySelector('html').classList.remove("dark","light")
        document.querySelector('html').classList.add(themeMode)
    },[themeMode])
  
    
  return (
        <ThemeProvider value={{darkTheme, lightTheme, themeMode}}>
            <div className="flex flex-wrap min-h-screen items-center">
            <div className="w-full">
                <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                    <ThemeBtn />
                </div>

                <div className="w-full max-w-sm mx-auto">
                <Card />
                </div>
            </div>
            </div>
        </ThemeProvider>

  )
}

export default App


/* 
*   here we can see that lightTheme,darkTheme humne iska functionality or definition nhi likha hai
context mein but last time humne jo hooks liya tha atleast wo predefine tha ki value ko lekar
set kar dega varible mein internally but yaha wo baat nhi hai so yaha hum directly uska defnition
likh denge jisse wo inject ho jaega automatically
*/