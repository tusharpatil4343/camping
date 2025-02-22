import React from "react";
import { Box, Typography, Button, IconButton, TextField, Grid, Container } from "@mui/material";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { IoArrowForward, IoArrowUp } from "react-icons/io5";
import logo from "../../assets/Logo.png";

const Footer = () => {
  return (
    <footer>
      {/* Top Section */}
      <Box sx={{ background: "linear-gradient(to bottom, #424242, #212121)", py: 8, px: 4, color: "white" }}>
        <Container>
          <Grid container spacing={6} alignItems="center" justifyContent="space-between">
            <Grid item xs={12} md={6}>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Leading the way in adventure
              </Typography>
              <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
                <IconButton sx={{ color: "white", bgcolor: "#1E88E5", '&:hover': { bgcolor: "#1565C0" } }}><FaFacebookF /></IconButton>
                <IconButton sx={{ color: "white", bgcolor: "#E91E63", '&:hover': { bgcolor: "#C2185B" } }}><FaInstagram /></IconButton>
                <IconButton sx={{ color: "white", bgcolor: "#29B6F6", '&:hover': { bgcolor: "#0288D1" } }}><FaTwitter /></IconButton>
                <IconButton sx={{ color: "white", bgcolor: "#D32F2F", '&:hover': { bgcolor: "#B71C1C" } }}><FaYoutube /></IconButton>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Join our Newsletter
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", mt: 2, borderRadius: 4, overflow: "hidden" }}>
                <TextField
                  variant="outlined"
                  placeholder="Enter your email"
                  size="small"
                  sx={{ flex: 1, bgcolor: "white", borderRadius: "4px 0 0 4px" }}
                />
                {/* <Button variant="contained" color="primary" sx={{ borderRadius: "4px" }}>
                  <IoArrowForward />
                </Button> */}
              </Box>
              <Button variant="contained" color="primary" sx={{ borderRadius: "50%",marginTop:"10px", width:"40px", height:"40px" }}>
                  <IoArrowForward />
                </Button>
            </Grid>

          </Grid>
        </Container>
      </Box>

      {/* Bottom Section */}
      <Box sx={{ bgcolor: "black", color: "white", py: 6, px: 4, position: "relative" }}>
        <Container>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" fontWeight="bold">Saffron Stays</Typography>
              <Box sx={{ mt: 2 }}>
                <Typography variant="body2" sx={{ cursor: "pointer", color: "white", "&:hover": { color: "white" } }}>Home</Typography>
                <Typography variant="body2" sx={{ cursor: "pointer", color: "white", "&:hover": { color: "white" } }}>About Us</Typography>
                <Typography variant="body2" sx={{ cursor: "pointer", color: "white", "&:hover": { color: "white" } }}>Tours</Typography>
                <Typography variant="body2" sx={{ cursor: "pointer", color: "white", "&:hover": { color: "white" } }}>Careers</Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography variant="h6" fontWeight="bold">Contact</Typography>
              <Box sx={{ mt: 2 }}>
                <Typography variant="body2">+91 9359774343</Typography>
                <Typography variant="body2">info@saffronstays.com</Typography>
                <Typography variant="body2">support@saffronstays.com</Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>

        {/* Back to Top Button */}
        <IconButton sx={{ position: "absolute", top: 220, right: 56, bgcolor: "white", color: "black", boxShadow: 3, '&:hover': { bgcolor: "gray" } }}>
          <IoArrowUp />
        </IconButton>

        {/* Logo Section */}
        <Box sx={{ mt: 6, width:"150px", position:"relative",left:"150px"}}>
          <Typography variant="h5">Saffron Stays</Typography>
          <img src={logo} alt="Saffron Stays" style={{ height: 64, marginTop: 8, }} />
        </Box>
      </Box>
    </footer>
  );
};

export default Footer;
