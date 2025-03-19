import React, { useState } from "react";
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
import { Menu, Home, Settings, People } from "@mui/icons-material";
interface SidebarProps{
  currentSide:number,
  onclickToggleFunction:(width:number)=>void;

}
const menuItems = [
  { 
    name: "Dashboard", 
    icon: <Home /> 
  },
  { name: "Users", 
    icon: <People /> 
  },
  { name: "Settings",
    icon: <Settings /> 
  },
];

const Sidebar: React.FC<SidebarProps>= ({currentSide,onclickToggleFunction}) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const theme = useTheme();
  const drawerWidth = isExpanded ? 15 : 3.2;
  const onClickHandler =()=>{
   
    setIsExpanded(!isExpanded);
    const Width = isExpanded ? 3.2 : 15;
    onclickToggleFunction( Width);
    
    console.log(currentSide)
  }
  return (
    <Box sx={{ display:"flex",  backgroundColor:theme.palette.background.paper}}>
      <Drawer
        variant="permanent"
       
      
        sx={{
          height:"100%",
          width: `${drawerWidth}rem`,

          // backgroundColor:theme.palette.primary,
          
          transition: "width 0.1s ease-in-out",
          "& .MuiDrawer-paper": {
            width: `${drawerWidth}rem`,
            transition: "width 0.1s ease-in-out",
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
            <ListItem key={item.name} disablePadding>
              <ListItemButton>
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
