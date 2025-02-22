import React from "react";
import { Box, InputBase, IconButton, useMediaQuery, useTheme } from "@mui/material";
import { Search } from "@mui/icons-material";
import img from "../../assets/image.png"; // Ensure correct image path

const Section1 = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Detect mobile screens

  return (
    <Box
  
      sx={{
        width: "100%",
        maxWidth: "100%",
        height: isMobile ? "200px" : "700px", // Adjusted for responsiveness
        margin: "auto",
        position: "relative",
        overflow: "hidden",
        // borderRadius: "15px",
        boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
        backgroundImage: `url(${img})`, // Set background image
        backgroundSize: "cover", // Ensure the image covers the entire box
        backgroundPosition: "center", // Center the image
      }}
    >
      {/* Search Bar */}
      <Box
        sx={{
          position: "absolute",
          bottom: isMobile ? "30px" : "200px", // Adjusted for responsiveness
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          alignItems: "center",
          background: "rgba(255, 255, 255, 0.3)",
          backdropFilter: "blur(10px)",
          borderRadius: "30px",
          padding: isMobile ? "6px 15px" : "8px 20px",
          width: isMobile ? "90%" : "70%",
          maxWidth: "550px",
          boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
        }}
      >
        <IconButton>
          <Search />
        </IconButton>
        <InputBase
          placeholder="Search Here"
          sx={{
            flex: 1,
            color: "white",
            fontSize: isMobile ? "14px" : "16px",
            "&::placeholder": {
              color: "white", // Ensure placeholder text is white 
              opacity: 1, // Ensure placeholder is fully visible
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default Section1;