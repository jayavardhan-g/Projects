import { createContext, useState } from "react";
export const BannerContext = createContext({});
export function BannerContextProvider ({children}){
    const [banner,setBanner] = useState({BannerVisibility:false,BannerTitle:null,BannerTime:null,BannerLink:"/"});
    return (
    <BannerContext.Provider value={{banner,setBanner}} >
        {children}
    </BannerContext.Provider>
)}