import { useEffect, useRef, useState } from "react"
import React from "react"

import { constructDefaultGoldenLayout } from "./workbench";
import './goldenlayout-base.css'
import './goldenlayout-dark-theme.css'
import { GoldenLayout } from "golden-layout";
import { Sidebar } from "./view/sidebar";
import { Header } from "./view/header";
import { Box } from "@mui/material";
// import { Box } from "@mui/material";

const HEADER_HEIGHT = 48

const App:React.FC =()=>{

  const layoutRef = useRef<HTMLDivElement >(null);
  const [goldenLayout, setgoldenLayout] = useState<GoldenLayout | null>(null)
  useEffect(()=>{
    if (!layoutRef.current) return

    const layout = constructDefaultGoldenLayout(layoutRef.current)
    setgoldenLayout(layout)
    layout.resizeWithContainerAutomatically =true

    return()=>{
      layout.destroy()
    }

  },[])

  // useEffect(() => {
  //       if (!goldenLayout) return;

  //       const resizeObserver = new ResizeObserver(() => {
  //         goldenLayout.setSize(500,500)
  //   console.log("DDDDD")
          
  //       });

  //       if (layoutRef.current) {
  //           resizeObserver.observe(layoutRef.current);
  //       }

  //       return () => resizeObserver.disconnect();
  //   }, [goldenLayout]);
  const handleSelectPanel =(panel:string)=>{
    
    goldenLayout?.addComponent(panel)
    goldenLayout?.saveLayout()
    
  }
  return(
    <>
    <Header
        onMenuClick={() => console.log("Menu Clicked")}
        buttons={[
          { label: "Settings", onClick: () => alert("Settings Clicked") },
          { label: "Logout", onClick: () => alert("Logging Out...") },
        ]}
      />
      <Box sx={{ display: "flex", height: `calc(100vh - ${HEADER_HEIGHT}px)`, marginTop: `${HEADER_HEIGHT}px` , overflow:"hidden"}}>
    {/* <div style={{ display: "flex", width: "100vw", height: "100vh" ,overflow: "hidden"}}> */}
    {/* Sidebar (adjusts width dynamically) */}
    {/* <Box sx={{ width: "243px", flexShrink: 0 }}>  */}
    {/* onSelectPanel={handleSelectPanel} */}
    <Box sx={{marginTop:`${HEADER_HEIGHT}px`}}>
    <Sidebar  />
    </Box>
   
    {/* </Box> */}
    

    {/* GoldenLayout Workspace (adjusts width automatically) */}
    <div ref={layoutRef} style={{ flexGrow: 1, width: "calc(100vw - 4rem)", height: "100%" , overflow:"hidden"}} />
    </Box>
{/* </div> */}
</>
  )
}

export default App