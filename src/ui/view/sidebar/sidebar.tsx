import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  useTheme
} from "@mui/material";
import MonitorSharpIcon from '@mui/icons-material/MonitorSharp';
import MapIcon from '@mui/icons-material/Map';
import { Menu, Settings } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { toggleSidebar } from "./slice";
import OpenPanel from "./selector";
import { GoldenLayout } from "golden-layout";



const menuItems = [
  { 
    name: "Map", 
    icon: <MapIcon />,
    componenet:"Map"
  },
  { name: "Dashboard", 
    icon: <MonitorSharpIcon /> ,
    componenet:"Dashboard"
  },
  { name: "Settings",
    icon: <Settings /> ,
    componenet:"Map"
  },
];


interface sideBarProps {
  layout:GoldenLayout | null,


}

const Sidebar: React.FC<sideBarProps>= ({layout}) => {
 
  const dispatch = useDispatch()
  const theme = useTheme();
  const isExpanded = useSelector((state:RootState)=>state.sidebar.expanded)
  const sideBar = useSelector((state:RootState)=>state.sidebar.width)
  
  


  const onClickHandler =()=>{

   dispatch(toggleSidebar())
    
    

  }
  return (
    <Box sx={{ display:"flex",  backgroundColor:theme.palette.background.paper}}>
      <Drawer
        variant="permanent"
       
      
        sx={{
          height:"100%",
          width: `${sideBar}rem`,

          // backgroundColor:theme.palette.primary,
          
          transition: "width 0.1s ease-in-out",
          "& .MuiDrawer-paper": {
            width: `${sideBar}rem`,
          
            overflowX: "hidden",
            boxSizing: "border-box",
            // color:theme.palette.text.primary,
            // backgroundColor:theme.palette.primary
          },
        }}
      >
        <List sx={{ padding: 0 ,marginTop:"48px"}}>
          {/* Toggle Button (Styled Exactly Like Other Items) */}
          <ListItem disablePadding>
            <ListItemButton onClick={onClickHandler}>
              <ListItemIcon>
                <Menu />
              </ListItemIcon>
              {isExpanded && <ListItemText primary="Menu" />}
            </ListItemButton>
          </ListItem>

          {/* Sidebar Items */}
          {menuItems.map((item) => (
            
            <ListItem key={item.name} disablePadding sx={{margin:"0px" , padding:"0px"}}>
              <ListItemButton onClick={()=>OpenPanel(layout,item.componenet)}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                {isExpanded && <ListItemText primary={item.name} />}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};

export default Sidebar;
