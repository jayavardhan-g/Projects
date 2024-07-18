import { createContext, ReactNode, useState } from "react";

export const ContestContext = createContext({});

export function ContestContextProvider ({children}){
    
    const [contests, setContests] = useState([])

    return (
    <ContestContext.Provider value={{contests,setContests}} >
        {children}
    </ContestContext.Provider>
)}
