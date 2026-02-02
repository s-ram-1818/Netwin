import { createContext, use, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({children}) => {
                    const [user , SetUser] = useState({
                                        name :"chanchal",
                                        password:"12345"
                    });

                    const [isValidUser , setIsValidUser] =useState(false)

                    return(
                             <UserContext.Provider value={{user,isValidUser,setIsValidUser}}>
                                        {children}
                             </UserContext.Provider>           
                    )
}
export default UserProvider

