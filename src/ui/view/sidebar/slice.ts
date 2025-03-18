import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SidebarState {
    width: number; // Sidebar width
    expanded: boolean;
}

const initialState: SidebarState = {
    width: 64, // Default collapsed
    expanded: false,
};

const sidebarSlice = createSlice({
    name: "sidebar",
    initialState,
    reducers: {
        toggleSidebar: (state) => {
            state.expanded = !state.expanded;
            state.width = state.expanded ? 256 : 64; // Adjust width dynamically
        },
        setSidebarWidth: (state, action: PayloadAction<number>) => {
            state.width = action.payload;
        },
    },
});

export const { toggleSidebar, setSidebarWidth } = sidebarSlice.actions;
export default sidebarSlice.reducer;
