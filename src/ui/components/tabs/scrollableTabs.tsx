import { Box, Tab, Tabs, useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import { TabConfigType } from "../../view/Dashboard/dashboard";


interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
  }
  
  
function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}



function CustomTabPanel(props: TabPanelProps) {

  
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        style={{width:"100%" , height:"100%"}}
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && <Box sx={{ p: 1,  width:"100%" , height:"100%" , maxHeight:"100%"}}>{children}</Box>}
      </div>
    );
}


interface ScrollableTabsProps {
    config:TabConfigType[]
}

const  ScrollableTabs:React.FC<ScrollableTabsProps>=({config})=> {
    const [value, setValue]=useState(0)
    const theme =   useTheme()
  
    
    console.log(theme.palette)
  
    useEffect(()=>{
  
      console.log(theme)
  
  
    },[theme])
  
    const handleChange = (_event:React.SyntheticEvent,newValue:number)=>{
      setValue(newValue);
    }
    return (
  
      
  
    <Box  sx={{  width:"100%" , height:"100%" , typography:'div'}}>
        <Tabs
        value={value}
        onChange = {handleChange}
        variant="scrollable"
        scrollButtons="auto"
        sx={{margin:"0px" , padding:"0px"}}
        >
        {
            config.map((tab,index)=>(
                <Tab  key={index} sx={{fontSize:"0.8rem" }} label={tab.label} />

            ))
        }
          
          
          
        </Tabs>
        <Box sx={{width:"100%", height:"100%" }}>

            {
                config.map((tab,index)=>(
                    <CustomTabPanel  value={value} index={index} >
                        
                    <tab.component/>

                    </CustomTabPanel>
                    
                ))
            }
           
      
  
        </Box>
        
  
    </Box>
     
    )
  }
  
  export default ScrollableTabs


  