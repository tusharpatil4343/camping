import React from "react";
import { Box, Grid, Typography, Card, CardMedia, Chip } from "@mui/material";
import { Place } from "@mui/icons-material";
import img1 from "../../assets/kokan.jpg"; // Ensure correct image path
import img2 from "../../assets/ECoast.jpg";
import img3 from "../../assets/canada.jpg";
import img4 from "../../assets/andaman.jpg";

// Destination Data
const destinations = [
  { name: "Konkan", img: img1, offset: false },
  { name: "E. Coast", img: img2, offset: true }, // Move this up
  { name: "Canada", img: img3, offset: false },
  { name: "Andaman", img: img4, offset: true }, // Move this up
];

const Section2 = () => {
  return (
    <Box sx={{ width: "100%", padding: { xs: "20px 10px", sm: "40px 20px" } }}>
      {/* Heading */}
      <Typography
        variant="h5"
        fontWeight="bold"
        sx={{ marginBottom: "20px", textAlign: { xs: "center", sm: "left" } }}
      >
        Discover the Touch of Nature
      </Typography>
      <br />

      {/* Responsive Grid */}
      <Grid container spacing={3} justifyContent="center">
        {destinations.map((destination, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            key={index}
            sx={{
              position: "relative",
              top: destination.offset ? { sm: "-50px", xs: "0" } : "0", // Moves 2nd & 4th images up on sm and larger screens
            }}
          >
            <Card
             
              sx={{
                
                borderRadius: "15px",
                overflow: "hidden",
                position: "relative",
                boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
                height: "100%", // Ensure the card takes full height
              }}
            >
              <CardMedia
              data-aos="fade-up"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine" 
                component="img"
                image={destination.img}
                alt={destination.name}
                
                sx={{
                  width: "100%", // Ensure the image takes full width of the card
                  height: { xs: "300px", sm: "400px", md: "400px" }, // Increase height for all devices
                  objectFit: "cover", // Ensure the image covers the area without distortion
                }}
              />
              <Chip
                icon={<Place />}
                label={destination.name}
                sx={{
                  position: "absolute",
                  top: 15,
                  right: 15,
                  backgroundColor: "white",
                  fontWeight: "bold",
                }}
              />
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Section2;