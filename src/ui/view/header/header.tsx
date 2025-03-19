import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";

interface HeaderProps {
  onMenuClick?: () => void;
  buttons?: { label: string; onClick: () => void }[];
}

const HEADER_HEIGHT = 48;

const Header: React.FC<HeaderProps> = ({ onMenuClick, buttons = [] }) => {
  
  return (
    <AppBar
      position="fixed"
    
      color="inherit"
      
      sx={{
        
        // backgroundColor:theme.palette.primary,
        // backgroundColor:theme.palette.primary,
        height: HEADER_HEIGHT,
        minHeight: HEADER_HEIGHT,
        display: "flex",
        justifyContent: "center",
        padding: "0 2px",
        zIndex: 1300, // Ensures it's above other elements
      }}
    >
      <Toolbar sx={{ minHeight: HEADER_HEIGHT, padding: "0 5px" }}>
        {/* Left Menu Icon */}
        {/* {onMenuClick && (
          <IconButton edge="start" color="inherit" onClick={onMenuClick} sx={{ padding: "4px" }}>
            <MenuIcon fontSize="small" />
          </IconButton>
        )} */}

        {/* App Title */}
        <Typography variant="h6" sx={{ flexGrow: 1, fontSize: "1rem" }}>
          Smart GCS
        </Typography>

        {/* Dynamic Buttons */}
        {buttons.map((btn, index) => (
          <Button
            key={index}
            color="inherit"
            onClick={btn.onClick}
            sx={{ fontSize: "0.85rem", padding: "4px 8px", minWidth: "auto" }}
          >
            {btn.label}
          </Button>
        ))}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
