import { combineReducers, configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./../view/sidebar/slice";
import  { persistReducer , persistStore} from "redux-persist"

import storage from 'redux-persist/lib/storage'
import goldenLayoutReducer from "./../layout/slice"
import themeReducer  from "./../theme/slice"


const presistConfig = {
    key:"root",
    storage
}

const rootReducer = combineReducers({
    sidebar: sidebarReducer,
    theme: themeReducer,
    goldenLayout:goldenLayoutReducer
})

const persistedReducer =persistReducer(presistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            
            serializableCheck: false, // Required for redux-persist
    })

});
export const persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

