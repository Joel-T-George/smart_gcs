import { GoldenLayout } from "golden-layout";



const OpenPanel=(layout:GoldenLayout | null, PanelComponent:string)=>{

    console.log(PanelComponent)
    console.log(layout)
    
   const existingPanel=layout?.findFirstComponentItemById(PanelComponent)
    // existingPanel?.content.filter(panels => panels)
    if (existingPanel=== undefined){
        layout?.addItem({
            type: "component",
            componentType: PanelComponent,
            id:PanelComponent,
    
            title: PanelComponent
        })
        layout?.updateRootSize()
        

    }
    
    
    
        
    

    
    
    


}

export default OpenPanel