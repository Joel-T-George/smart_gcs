import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LayoutConfig } from "golden-layout";

interface LayoutState {
    layout: LayoutConfig; // Store the layout config
}

export const defaultLayout:LayoutConfig = {
    settings: {
        hasHeaders: true,
        showPopoutIcon: true,
        showMaximiseIcon: true,
        showCloseIcon: true,
    },
    root: {
        type: "row",
        content: [
            {
                type:"component",
                componentType:"Map",
                title:"Map",
            
                
            }
           
        ],
    },
} 

const initialState: LayoutState = {
    layout: defaultLayout
}

const layoutSlice = createSlice({
    name: "goldenLayout",
    initialState,
    reducers: {
        updateLayout: (state, action: PayloadAction<any>) => {
        
            state.layout = action.payload
        },
        
    },
});

export const { updateLayout } = layoutSlice.actions;
export default layoutSlice.reducer;
