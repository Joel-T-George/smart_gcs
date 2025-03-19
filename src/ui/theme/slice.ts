import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import ThemeUpdater from "./themeUpdate";


interface ThemeState {
    mode: "light" | "dark"
}

const initialState: ThemeState ={
    mode:"light"
};

const themeSlice =  createSlice({
    name:"theme",
    initialState,
    reducers:{
        toogleTheme:(state)=>{
            state.mode = state.mode === "light" ? "dark" : "light";
            
            
        },
        setTheme:(state, action:PayloadAction<"light" | "dark">)=>{

            state.mode = action.payload;
        }
    }


})

export const {toogleTheme , setTheme} = themeSlice.actions;
export default themeSlice.reducer;