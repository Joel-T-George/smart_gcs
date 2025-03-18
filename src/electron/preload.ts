import { contextBridge , ipcRenderer} from "electron";

// Allow the frontend to access necessary features
contextBridge.exposeInMainWorld("electron", {
    platform: process.platform,
    
});
