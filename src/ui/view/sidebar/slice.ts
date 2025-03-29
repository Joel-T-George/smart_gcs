import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SidebarState {
    width: number; // Sidebar width
    expanded: boolean;
}

const initialState: SidebarState = {
    width: 3.2, // Default collapsed
    expanded: false,
};

const sidebarSlice = createSlice({
    name: "sidebar",
    initialState,
    reducers: {
        toggleSidebar: (state) => {
            state.expanded = !state.expanded;
            state.width = state.expanded ? 15 : 3.2; // Adjust width dynamically
        },
        setSidebarWidth: (state, action: PayloadAction<number>) => {
            state.width = action.payload??state.width;
        },
    },
});

export const { toggleSidebar, setSidebarWidth } = sidebarSlice.actions;
export default sidebarSlice.reducer;
