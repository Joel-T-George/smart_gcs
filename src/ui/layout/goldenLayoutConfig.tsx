import React from "react";
import ReactDOM from "react-dom/client"; // For React 18+

// import { Map } from "../view/map";

import { ComponentContainer, GoldenLayout } from "golden-layout";
import OpenLayerMap from "../view/map/openLayerMap";
import Dashboard from "../view/Dashboard/dashboard";



const panelMapping: Record<string, React.FC> = {
    Dashboard:Dashboard,
    Map: OpenLayerMap,


  };

export const registerGoldenLayoutPanels = (layout:GoldenLayout)=>{

    Object.entries(panelMapping).forEach(([name, RenderPanel])=>{
        

        layout.registerComponentFactoryFunction(name,(container:ComponentContainer)=>{
            if(!container.element) return

            const root =  ReactDOM.createRoot(container.element)
            root.render(<RenderPanel />)

            // container.on("destroy",()=>{
            //     root.unmount()
            // })
        })

        


        
    })
    
    
}


    
