import React from "react";
import UserContext from "./userContext";

const UserContextProvider = ({children}) => {
    const [user, setUser] = React.useState(null)
    return(
        <UserContext.Provider value={{user, setUser}}> 
        {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider

// we pass children it show wrapping whatever we going to wrap  other component like Login,profile