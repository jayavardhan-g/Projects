import { createContext, ReactNode, useState } from "react";

export const ContestContext = createContext({});

interface UContest{
    "id": Number,
    "name": String,
    "type": String,
    "phase": String,
    "frozen": Boolean,
    "durationSeconds": Number,
    "startTimeSeconds": Number,
    "relativeTimeSeconds": Number,
    "site":String
}

export function ContestContextProvider ({children}:{children:ReactNode}){
    
    const [contests, setContests] = useState<Array<UContest>>([])

    return (
    <ContestContext.Provider value={{contests,setContests}} >
        {children}
    </ContestContext.Provider>
)}
