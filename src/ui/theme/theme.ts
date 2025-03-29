import { createTheme } from "@mui/material";


export const getTheme = (mode:"light"|"dark") =>
    createTheme({
        palette:{
            mode,
            primary: { main: mode === "dark" ? "#90caf9" : "#1565c0" },
            secondary: { main: mode === "dark" ? "#299ec1" : "#075387" },
            
            text: {
                primary: mode === "dark" ? "#ffffff" : "#000000",
                secondary:mode ==="dark" ? "#299ec1" : "#075387"
            },
            
            background: {
                default: mode === "dark" ? "#121212" : "#ffffff",
                paper: mode === "dark" ? "#1e1e1e" : "#f5f5f5",
            },
        },

            
        }
    
)



