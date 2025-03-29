
import { GoldenLayout, LayoutConfig} from "golden-layout";
import { registerGoldenLayoutPanels } from "./layout/goldenLayoutConfig";
import { Dispatch } from "@reduxjs/toolkit";
import { defaultLayout, updateLayout } from "./layout/slice";




export function constructDefaultGoldenLayout(containerElement:HTMLElement, state:LayoutConfig, dispatch:Dispatch):GoldenLayout {
  
        
    const layout = new GoldenLayout(containerElement);
    // containerElement.style.setProperty("--primary-color", theme.palette.primary.main)
    // containerElement.style.setProperty("--background-color", theme.palette.background.default)
    // containerElement.style.setProperty("--paper-color",theme.palette.background.paper)
    // containerElement.style.setProperty("--text-color", theme.palette.text.primary)
    
    
    // Register components dynamically using Object.entries()
    registerGoldenLayoutPanels(layout)

    
    
    
    
    // const config: LayoutConfig =    }

    // layout.loadLayout(state)

    console.log(layout.getRegisteredComponentTypeNames())
    let isInitalised:boolean = false
   
    
    if(!state.root){
        console.log("Default Static Layout Setup")
        
        layout.loadLayout(defaultLayout)
        let newConfig = layout.saveLayout()
        dispatch(updateLayout(LayoutConfig.fromResolved(newConfig)))

    

    }
    else {
        try{
            console.log("Restore Layout from Store")
            layout.loadLayout(state);
            
           
        }
        catch(error){
            console.log( error,"Restore Error")
        }

    }


    

        
        
        

    layout.on("stateChanged",()=>{
        
        if(layout.isInitialised){
            let newConfig = layout.saveLayout()
            console.log("Change on Layout")
            dispatch(updateLayout(LayoutConfig.fromResolved(newConfig)))
        
        

        }
        
        
    })

    
    
    

    
    



    return layout;

    
}