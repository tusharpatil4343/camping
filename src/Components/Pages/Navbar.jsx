import React, { useState } from "react";
import { 
  AppBar, Toolbar, IconButton, Button, Badge, Typography, Drawer, List, ListItem, ListItemText 
} from "@mui/material";
import { Menu as MenuIcon, Search, Notifications, Call, Close } from "@mui/icons-material";
import { useTheme, useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("Home"); // Track active section
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md")); // Detect mobile screen

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  let Navigate = useNavigate();
  let handleNavClick = (item) => {
    setActiveNav(item); // Set active navigation item
    if (item === "Home") Navigate("/");
    if (item === "Tours") Navigate("/tours");
    if (item === "Prices") Navigate("/prices");
    if (item === "About Us") Navigate("/about");
    if (item === "Contact") Navigate("/contact");
  };

  const navItems = ["Home", "Tours", "Prices", "About Us"];

  return (
    <AppBar position="static" sx={{ backgroundColor: "white", color: "black", boxShadow: 0 }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Mobile Menu Icon */}
        {isMobile && (
          <IconButton edge="start" color="inherit" onClick={handleDrawerToggle}>
            <MenuIcon />
          </IconButton>
        )}

        {/* Left Section - Navigation Links (Hidden on Mobile) */}
        {!isMobile && (
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            {navItems.map((item, index) => (
              <Typography 
                key={index} 
                variant="body1" 
                onClick={() => handleNavClick(item)} 
                sx={{
                  cursor: "pointer", 
                  color: activeNav === item ? "blue" : "black", // Change color when active
                  fontWeight: activeNav === item ? "bold" : "normal"
                }}
              >
                {item}
              </Typography>
            ))}
          </div>
        )}

        {/* Center - Logo */}
        <Typography variant="h6" sx={{ fontWeight: "bold", display: "flex", alignItems: "center" }}>
          <span style={{ marginRight: "5px" }}>⬛</span> TripGo
        </Typography>

        {/* Right Section - Icons & Buttons */}
        <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
          <IconButton>
            <Search />
          </IconButton>
          <IconButton>
            <Badge badgeContent={2} color="warning">
              <Notifications />
            </Badge>
          </IconButton>
          {!isMobile && (
            <>
              <Button variant="outlined" sx={{ borderRadius: "20px", textTransform: "none" }}>
                Login
              </Button>
              <Button
                variant="contained"
                sx={{ borderRadius: "20px", backgroundColor: "black", color: "white", textTransform: "none" }}
                startIcon={<Call />}
              >
                Contact Us
              </Button>
            </>
          )}
        </div>
      </Toolbar>

      {/* Mobile Drawer */}
      <Drawer anchor="left" open={mobileOpen} onClose={handleDrawerToggle}>
        <div style={{ width: 250, padding: "10px" }}>
          <IconButton onClick={handleDrawerToggle} sx={{ float: "right" }}>
            <Close />
          </IconButton>
          <List>
            {navItems.map((item, index) => (
              <ListItem button key={index} onClick={() => handleNavClick(item)}>
                <ListItemText 
                  primary={item} 
                  sx={{ color: activeNav === item ? "blue" : "black", fontWeight: activeNav === item ? "bold" : "normal" }}
                />
              </ListItem>
            ))}
            <ListItem button>
              <Button fullWidth variant="outlined">Login</Button>
            </ListItem>
            <ListItem button>
              <Button fullWidth variant="contained" sx={{ backgroundColor: "black", color: "white" }}>
                Contact Us
              </Button>
            </ListItem>
          </List>
        </div>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
