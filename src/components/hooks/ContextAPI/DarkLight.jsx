import { createContext, use, useState } from "react";



export const ThemeContext=createContext();
export const ThemeProvider=({children})=>{
const[theme,setTheme]=useState('dark');
const handleToggolTheme=()=>{
    return setTheme((prev)=>prev=='dark'?'light':'dark')
}
    return<ThemeContext.Provider value={{theme,handleToggolTheme}}>
        {children}
    </ThemeContext.Provider>
}
// Creating a component
export const DarkLight=()=>{
    const{theme,handleToggolTheme}=use(ThemeContext)
    return(
        <div className={
            `min-h-screen flex flex-col items-center justify-center gap-4
            ${
                theme=='dark'
                ?'bg-black text-white'
                :'bg-white text-black'
            }`
        }>
        <h1 className="text-4xl font-bold">Dark Light Mode Website</h1>
        
        <button onClick={handleToggolTheme}
        className={`px-5 py-5 rounded-lg font semibold
          ${
                theme=='dark'
                ?'bg-white text-black'
                :'bg-black text-white'
            }
        
            `}>{theme=='dark'?'light Mode ':'dark Mode'}</button>
        </div>
    )
}

