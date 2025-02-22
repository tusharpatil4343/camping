import React from "react";
import { Box, Grid, Typography, Card, CardContent } from "@mui/material";
import image from "../../assets/man3.jpg"; // Replace with correct image path

// Data for the cards
const cards = [
  { id: "01", title: "Explore Nordic Sea", subtitle: "Enjoy cold breeze of nordic seas", dark: true },
  { id: "02", title: "Wilderness", subtitle: "Embrace the Wild Wilderness", dark: false },
  { id: "03", title: "Wilderness", subtitle: "Embrace the Wild Wilderness", dark: false },
  { id: "04", title: "Nordic Sea", subtitle: "Enjoy cold breeze", dark: true },
];

const Section3 = () => {
  return (
    <Box sx={{ width: "100%", padding: "40px 20px" }}>
      {/* Heading */}
      <Typography variant="h5" fontWeight="bold" sx={{ marginBottom: "20px" }}>
        Nordic Sea - Best for June 2025
      </Typography>

      {/* Grid Layout */}
      <Grid container spacing={3} justifyContent="center">
        {/* Left Side - Cards */}
        <Grid item xs={12} md={6} container spacing={2}>
          {cards.map((card, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Card
                sx={{
                  backgroundColor: card.dark ? "#121212" : "#F8F8F8",
                  color: card.dark ? "white" : "black",
                  padding: "20px",
                  minHeight: "160px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  borderRadius: "12px",
                  boxShadow: "none",
                }}
              >
                <CardContent>
                  <Typography variant="caption" sx={{ opacity: 0.7 }}>
                    / {card.id}
                  </Typography>
                  <Typography variant="h6" fontWeight="bold">
                    {card.title}
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.7 }}>
                    {card.subtitle}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Right Side - Image */}
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={image}
            alt="Nordic Sea"
            sx={{
              width: "100%",
              height: "100%",
              maxHeight: "500px",
              borderRadius: "12px",
              objectFit: "cover",
              border: "4px solid #EAEAEA",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Section3;
