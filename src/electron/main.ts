import {app , BrowserWindow, ipcMain } from "electron"

import { isDev } from "./utils.js"
import { getPreLoadPath,getUserInterfacePath } from "./pathresolver.js";

let mainWindow:BrowserWindow | null

app.whenReady().then(()=>{
    
    mainWindow = new BrowserWindow({
        height:800,
        width:1000,
        // show:false,
        // titleBarStyle: "hidden",
        // frame: false,
        webPreferences:{
            preload: getPreLoadPath(),
            nodeIntegration:true,
            contextIsolation: true,
            nodeIntegrationInWorker:true
            
        }
    })

    mainWindow.setMenu(null)
    // mainWindow.setMenu(null)

    console.log(getPreLoadPath())

    if(isDev()){
        mainWindow.loadURL("http://localhost:5123")

    }
    else {
        mainWindow.loadFile(getUserInterfacePath())
    }

    

    mainWindow.once("ready-to-show",()=>{
        mainWindow?.show()
    })
})