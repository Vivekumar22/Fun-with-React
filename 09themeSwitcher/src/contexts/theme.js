import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {},
})

export const ThemeProvider = ThemeContext.Provider // wrap karne ke liye yeh use hoga aur value dene ke liye like kon kon sa method or state access ho skta hai

export default function useTheme(){  // useTheme koi v agr method or varible chahiye hoga toh kyuki yeh useContext(ThemeContext) likha hai toh directly use kr skte hai
    return useContext(ThemeContext)
}






/*
    wrap ke liye provider and method or varible access ke liye context hi chahiye n ki provider
*/

// like here we can give anyvariable and function it doesn't fix to give onlt hooks 
// like in UserContectProvider we given 