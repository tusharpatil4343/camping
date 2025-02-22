import React, { useContext, useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  IconButton,
  Button,
  Fade,
} from "@mui/material";
import {
  Star,
  Thermostat,
  ArrowBackIos,
  ArrowForwardIos,
  LocationOn,
  CurrencyRupee,
} from "@mui/icons-material";
import { myContext } from "../Context/Camp";

const Section4 = () => {
  const { tents } = useContext(myContext);
  const [imageIndexes, setImageIndexes] = useState({});

  const handleImageChange = (campId, direction, totalImages) => {
    setImageIndexes((prevIndexes) => {
      const currentIndex = prevIndexes[campId] || 0;
      const newIndex =
        direction === "next"
          ? (currentIndex + 1) % totalImages
          : (currentIndex - 1 + totalImages) % totalImages;
      return { ...prevIndexes, [campId]: newIndex };
    });
  };

  return (
    <Box sx={{ p: 4, bgcolor: "grey.100" }}>
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 4 }}>
        New Destinations
      </Typography>
      <Grid container spacing={3}>
        {tents.slice(15, 23).map((camp) => {
          const currentIndex = imageIndexes[camp.id] || 0;
          const totalImages = camp.about.images.length;

          return (
            <Grid item key={camp.id} xs={12} sm={6} md={4} lg={3}>
              <Card
                sx={{
                  bgcolor: "white",
                  boxShadow: 3,
                  borderRadius: 3,
                  overflow: "hidden",
                  height: 450, // Increased height to accommodate button
                  display: "flex",
                  flexDirection: "column",
                  transition: "0.3s",
                  "&:hover": { transform: "scale(1.03)" },
                }}
              >
                <Box sx={{ position: "relative", width: "100%", height: 260 }}>
                  <Fade in={true} timeout={500} key={currentIndex}>
                    <CardMedia
                      component="img"
                      image={camp.about.images[currentIndex]}
                      alt={camp.campName}
                      sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        transition: "opacity 0.5s ease-in-out",
                      }}
                    />
                  </Fade>

                  <IconButton
                    sx={{
                      position: "absolute",
                      top: "50%",
                      left: 10,
                      transform: "translateY(-50%)",
                      bgcolor: "rgba(0, 0, 0, 0.5)",
                      color: "white",
                      "&:hover": { bgcolor: "rgba(0, 0, 0, 0.8)" },
                    }}
                    onClick={() =>
                      handleImageChange(camp.id, "prev", totalImages)
                    }
                  >
                    <ArrowBackIos />
                  </IconButton>

                  <IconButton
                    sx={{
                      position: "absolute",
                      top: "50%",
                      right: 10,
                      transform: "translateY(-50%)",
                      bgcolor: "rgba(0, 0, 0, 0.5)",
                      color: "white",
                      "&:hover": { bgcolor: "rgba(0, 0, 0, 0.8)" },
                    }}
                    onClick={() =>
                      handleImageChange(camp.id, "next", totalImages)
                    }
                  >
                    <ArrowForwardIos />
                  </IconButton>

                  <Box
                    sx={{
                      position: "absolute",
                      top: 8,
                      right: 8,
                      bgcolor: "rgba(0, 0, 0, 0.7)",
                      color: "white",
                      p: 1,
                      borderRadius: 2,
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      fontSize: 14,
                    }}
                  >
                    <Star sx={{ fontSize: 16, color: "gold" }} />
                    <Typography variant="body2">
                      {camp.ratings.checkInExperience.toFixed(1)}
                    </Typography>
                    <Thermostat sx={{ fontSize: 16, color: "lightblue" }} />
                    <Typography variant="body2">
                      {camp.weather.currentTemp}
                    </Typography>
                  </Box>
                </Box>

                <CardContent sx={{ p: 2, flexGrow: 1 }}>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      mb: 1,
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    <LocationOn sx={{ fontSize: 18, color: "red" }} />{" "}
                    {camp.address.tal}, {camp.address.dist}
                  </Typography>

                  <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                    {camp.campName}
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      mb: 2,
                    }}
                  >
                    <Typography
                      variant="h6"
                      color="primary"
                      sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
                    >
                      <CurrencyRupee sx={{ fontSize: 18 }} />{" "}
                      {camp.prices.afterDiscount}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        textDecoration: "line-through",
                        display: "flex",
                        alignItems: "center",
                        gap: 0.5,
                      }}
                    >
                      <CurrencyRupee sx={{ fontSize: 16 }} />{" "}
                      {camp.prices.actual}
                    </Typography>
                  </Box>

                  {/* Check Availability Button */}
                  <Button
                    variant="contained"
                    fullWidth
                    sx={{
                      mt: 1,
                      fontWeight: "bold",
                      textTransform: "none",
                      backgroundColor: "#FFD700", // Gold hex code
                      color: "#000", // You'll likely want black text on a gold background
                      "&:hover": {
                        backgroundColor: "#FFC300", // A slightly darker gold on hover
                        color: "#000",
                      },
                    }}
                    onClick={() =>
                      alert(`Checking availability for ${camp.campName}`)
                    }
                  >
                    Check Availability
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Section4;
