
import { createContext, useState } from "react";

export const ContextProvider = createContext()

const ContextProv = ({ children }) => {
   
   const [calc, setCalc] = useState({sign: "", num: 0, res: 0});
   
   const providerValue = {
    calc, setCalc
   }


    return (
        <ContextProvider.Provider value={providerValue}>
            {children}
        </ContextProvider.Provider>
    )
}

export default ContextProv