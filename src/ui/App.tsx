import { useEffect, useRef, useState } from "react"
import React from "react"

import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

import { constructDefaultGoldenLayout } from "./workbench";

import { GoldenLayout, LayoutConfig } from "golden-layout";
import { Sidebar } from "./view/sidebar";
import { Header } from "./view/header";
import { Box, useTheme} from "@mui/material";
import { toogleTheme } from "./theme/slice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store";
import { updateLayout } from "./layout/slice";
// import { Box } from "@mui/material";
import { connect } from "react-redux";

const HEADER_HEIGHT = 48

const App =({CurrentTheme,handleTheme,id}:{CurrentTheme:"dark" | "light",handleTheme:() => void,id:string})=>{

  console.log("CurrentTheme",CurrentTheme)
  
  const dispatch = useDispatch();
  const [Layout, setLayout] = useState<GoldenLayout| null>(null)
  const theme = useTheme()
  // const CurrentTheme = useSelector((state:RootState)=>state.theme.mode)
  

  const sideBar = useSelector((state:RootState)=> state.sidebar.width)
  
  const layoutRef = useRef<HTMLDivElement >(null);
  const stateLayout = useSelector((state: RootState) => state.goldenLayout.layout);

  
  



  useEffect(()=>{
    console.log(stateLayout)
    
    if (!layoutRef.current) return
    
   
    const Glayout = constructDefaultGoldenLayout(layoutRef.current, stateLayout, dispatch)
  
    Glayout.resizeWithContainerAutomatically =true
    setLayout(Glayout)
  


   
    

    return()=>{
      Glayout.destroy()
    }

  },[])


  return(
    <>

    <Header
        
        buttons={[

          {
            label:"Toggle Theme", 
            onClick:handleTheme,
            isIcon:true,
            icon: CurrentTheme === "dark" ? <LightModeIcon/> :<DarkModeIcon />
          }
        ]}
      />
      
    <Box sx={{ padding:"0px", margin:"0px", display: "flex", height: `calc(100vh - ${HEADER_HEIGHT}px)`, marginTop: `${HEADER_HEIGHT}px` , overflow:"hidden" , backgroundColor: "background.default"}}>

        <Box sx={{padding:"0px" ,margin:"0px" ,marginTop:`${HEADER_HEIGHT}px`}}>
        <Sidebar layout={Layout} />
        </Box >
  
      

      {/* GoldenLayout Workspace (adjusts width automatically) */}
        <div ref={layoutRef} style={{ flexGrow: 1, width: `calc(100vw - ${sideBar}rem)`, height: "100%" , overflow:"hidden", backgroundColor:theme.palette.background.default, color:'text.primary'}} />
      
    </Box>

</>
  )
}

const SampleApp = connect(
  (state:RootState,ownProps) => ({

    CurrentTheme: state.theme.mode
  }
  ),
  (dispatch,ownProps) => ({
    handleTheme(){
      console.log(ownProps)
      dispatch(toogleTheme())
    }
  })
)(App)

export default SampleApp