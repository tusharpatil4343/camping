import React, { useContext, useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import {
  Box,
  Typography,
  Container,
  Button,
  ToggleButtonGroup,
  ToggleButton,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Pagination,
} from "@mui/material";
import { myContext } from "../../Context/Camp";
import { styled } from "@mui/system";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { CardActionArea } from "@mui/material";

const GradientBox = styled(Box)({
  background: "linear-gradient(to right, #4b2c1f, #e4b88b)",
  height: "60vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  color: "white",
  textAlign: "center",
  borderRadius: "15px",
});

const FilterBox = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  gap: "10px",
  marginTop: "20px",
  marginBottom: "20px",
  alignItems: "center",
  "& button": {
    borderRadius: "15px",
  }
});

const StyledCard = styled(Card)({
  borderRadius: "15px",
  boxShadow: "3px 3px 10px rgba(0,0,0,0.2)",
  overflow: "hidden",
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.05)",
  },
});

const Tours = () => {
  let { tents, hotels, homeStays } = useContext(myContext);
  const [selectedCategory, setSelectedCategory] = useState("Tents");
  const [page, setPage] = useState(1);
  const itemsPerPage = 8;

  const handleCategoryChange = (event, newCategory) => {
    if (newCategory !== null) {
      setSelectedCategory(newCategory);
    }
  };

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const displayedItems = 
  selectedCategory === "Hotels" ? hotels : 
  selectedCategory === "Homestays" ? homeStays : 
  tents;

  const paginatedItems = displayedItems.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  return (
    <div>
      <Navbar />
      <Container maxWidth="100vw">
        <GradientBox>
          <Typography className="focus-in-contract-bck" variant="h3" fontWeight="bold" sx={{ mt: 1 }}>
            Discover the Unknown
          </Typography>
          <Typography className="focus-in-contract-bck" variant="h3" fontWeight="bold">
            in every Adventure
          </Typography>
        </GradientBox>
        <FilterBox>
          <ToggleButtonGroup
            value={selectedCategory}
            exclusive
            onChange={handleCategoryChange}
            aria-label="property type"
            size="large"
            color="primary"
          >
            <ToggleButton value="Tents">Tents</ToggleButton>
            <ToggleButton value="Hotels">Hotels</ToggleButton>
            <ToggleButton value="Homestays">Homestays</ToggleButton>
            <ToggleButton value="Cottages">Cottages</ToggleButton>
            <ToggleButton value="Farmhouses">Farmhouses</ToggleButton>
            <ToggleButton value="Treehouses">Treehouses</ToggleButton>
            <ToggleButton value="Villas">Villas</ToggleButton>
          </ToggleButtonGroup>
          <Button variant="contained">Sort By</Button>
        </FilterBox>
        
        <br />

        <Grid container spacing={3} justifyContent="center">
          {paginatedItems.map((camp) => (
            <Grid item key={camp.id} xs={12} sm={6} md={4} lg={3}>
              <StyledCard sx={{ width: "90%", height: 380 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    image={camp.about.images[0]}
                    alt={camp.campName}
                    sx={{ height: 220, objectFit: "cover" }}
                  />
                  <CardContent>
                    <Typography variant="h6" fontWeight="bold">
                      {camp.campName}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" display="flex" alignItems="center">
                      <LocationOnIcon fontSize="small" sx={{ mr: 0.5 }} />
                      {camp.address.tal}, {camp.address.dist}
                    </Typography>
                    <Typography variant="h6" color="primary" display="flex" alignItems="center">
                      <AttachMoneyIcon fontSize="small" sx={{ mr: 0.5 }} />
                      {camp.prices.afterDiscount}
                    </Typography>
                    <Button variant="contained" fullWidth sx={{ mt: 1 }}>
                      Check Availability
                    </Button>
                  </CardContent>
                </CardActionArea>
              </StyledCard>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <Pagination
            count={Math.ceil(displayedItems.length / itemsPerPage)}
            page={page}
            onChange={handlePageChange}
            color="primary"
          />
        </Box><br />
        <br />
      </Container>
      <Footer/>
    </div>
  );
};

export default Tours;