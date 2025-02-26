import { useContext } from "react";
import { createToggleContext } from "./context/ToggleContext";

const HeaderToggle = ()=>{
    const {handleToggle,toggle} = useContext(createToggleContext)
     return (
        <>
         <div className={` flex text-right  p-4 `}>
           <button onClick={handleToggle} className="border-none text-2xl cursor-pointer">
              {toggle ? "🌙" : "☀️"}
           </button>
        </div>
        </>
     )
};

export default HeaderToggle;