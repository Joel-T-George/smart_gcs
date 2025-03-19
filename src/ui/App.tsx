import { useEffect, useRef, useState } from "react"
import React from "react"



import { constructDefaultGoldenLayout } from "./workbench";

import { GoldenLayout } from "golden-layout";
import { Sidebar } from "./view/sidebar";
import { Header } from "./view/header";
import { Box, useTheme} from "@mui/material";
import { toogleTheme } from "./theme/slice";
import { useDispatch } from "react-redux";
// import { Box } from "@mui/material";

const HEADER_HEIGHT = 48

const App:React.FC =()=>{
  const [sideBar, setSidebar] = useState(15)
  const dispatch = useDispatch();
  const theme = useTheme()
  
  
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
  return(
    <>

    <Header
        onMenuClick={() => console.log("Menu Clicked")}
        buttons={[

          {
            label:"Toggle Theme", 
            onClick:()=>dispatch(toogleTheme())
          }
        ]}
      />
      
    <Box sx={{ padding:"0px", margin:"0px", display: "flex", height: `calc(100vh - ${HEADER_HEIGHT}px)`, marginTop: `${HEADER_HEIGHT}px` , overflow:"hidden" , backgroundColor: "background.default"}}>

        <Box sx={{padding:"0px" ,margin:"0px" ,marginTop:`${HEADER_HEIGHT}px`}}>
        <Sidebar   currentSide={sideBar} onclickToggleFunction={setSidebar}/>
        </Box >
  
      

      {/* GoldenLayout Workspace (adjusts width automatically) */}
        <div ref={layoutRef} style={{ flexGrow: 1, width: `calc(100vw - ${sideBar}rem)`, height: "100%" , overflow:"hidden", backgroundColor:theme.palette.background.default, color:'text.primary'}} />
      
    </Box>

</>
  )
}

export default App