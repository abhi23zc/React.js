import { createContext, useState , useContext} from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({children}) =>{
    
    const [themeMode, setthemeMode] = useState("light")

    return(

        <ThemeContext.Provider value={{themeMode, setthemeMode}}>
        {children}
        </ThemeContext.Provider>
    )
}

export default function useTheme(){
    
    return useContext(ThemeContext);
}