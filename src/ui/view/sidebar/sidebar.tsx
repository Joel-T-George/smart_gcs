import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
} from "@mui/material";
import { Menu, Home, Settings, People } from "@mui/icons-material";

const menuItems = [
  { name: "Dashboard", icon: <Home /> },
  { name: "Users", icon: <People /> },
  { name: "Settings", icon: <Settings /> },
];

const Sidebar: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const drawerWidth = isExpanded ? 240 : 50;

  return (
    <Box sx={{ display:"flex" }}>
      <Drawer
        variant="permanent"
        sx={{
          height:"100%",
          width: drawerWidth,
          
          transition: "width 0.3s ease-in-out",
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            transition: "width 0.3s ease-in-out",
            overflowX: "hidden",
            boxSizing: "border-box",
          },
        }}
      >
        <List sx={{ padding: 0 ,marginTop:"48px"}}>
          {/* Toggle Button (Styled Exactly Like Other Items) */}
          <ListItem disablePadding>
            <ListItemButton onClick={() => setIsExpanded(!isExpanded)}>
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
