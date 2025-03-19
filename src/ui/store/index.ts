import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./../view/sidebar/slice";
import themeReducer  from "./../theme/slice"

export const store = configureStore({
    reducer: {
        sidebar: sidebarReducer,
        theme: themeReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;