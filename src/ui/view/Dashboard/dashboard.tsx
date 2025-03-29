import React from "react"
import ScrollableTabs from "../../components/tabs/scrollableTabs"
import OpenLayerMap from "../map/openLayerMap"
import { Box } from "@mui/material";

export interface TabConfigType {
  label: string;
  component: React.FC;
}

const TabConfig:TabConfigType[] = [
  {
    label:"Overall",
    component:OpenLayerMap
  }

]

 






const  Dashboard:React.FC=()=> {
  return(
    <>
    <Box sx={{width:"100%" , height:"35%"}}>
    <ScrollableTabs config={TabConfig}/>

    </Box>
    {/* <ListDetectedVechicles/> */}
    
    </>
  )
}

export default Dashboard