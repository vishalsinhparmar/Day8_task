import { createContext, useState } from "react";

const createToggleContext = createContext();
const ToggleContext = ({children})=>{
    const [toggle,setToggle] = useState(false)
    const handleToggle = ()=>{
         setToggle((toggle)=> !toggle)
    }
     return (
        <createToggleContext.Provider value={{setToggle,toggle,handleToggle}}>
           {children}
        </createToggleContext.Provider>
     )
};

export {
    ToggleContext,
     createToggleContext
}