import { Box, Button, Container, Drawer, Grid, Link, Modal, Paper, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
const MULogin = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false)
    return (
        <Container
            maxWidth="md"
            sx={{
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                // border:"1px solid black"
            }}
        >
            <Grid container spacing={2} alignItems="center" justifyContent="center">
                <Grid item xs={8} md={6} >
                    <Box component='img'
                        src='https://techcrunch.com/wp-content/uploads/2020/11/Instagram-Home.png?resize=64'
                        sx={{ width: "100%" }} />
                </Grid>
                <Grid item xs={12} md={6} alignItems="center" justifyContent="center">
                    <Paper sx={{
                        padding: 5,
                        textAlign: "center",
                        boxShadow: 5
                    }}>
                        <Typography variant='h4' fontWeight={700} gutterBottom>
                            Instagram
                        </Typography>
                        <Box component="form" sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 3
                        }}>

                            <TextField label="User Name" fullWidth></TextField>
                            <TextField label="Password" fullWidth></TextField>
                            <Button variant='contained'>
                                Login
                            </Button>
                            <Link variant='contained' sx={{cursor:"pointer"}} onClick={() => {
                                // setModalOpen(true);
                                setDrawerOpen(true)
                            }}>
                                Sign Up
                            </Link>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>





            {/* sign up Modal container */}

            <Modal open={modalOpen} onClose={() => {
                setModalOpen(false)
            }}>
                <Box
                    sx={{
                        height: "500px",
                        width: { xs: "80%", md: "500px" },
                        bgcolor: "white",
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%,-50%)"

                    }}
                >
                    
                </Box>

            </Modal>

            {/* sign up drawer container */}

            <Drawer anchor='right' open={drawerOpen} onClose={() => {
                setDrawerOpen(false)
            }} >

                <Box
                    sx={{
                        width: { xs: "200px",sm:"400px", md: "600px", lg:"700px" },
                        bgcolor: "white",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent:"center",
                        textAlign:"center",
                        
                    }}
                >
                     <Typography variant='h4' fontWeight={700} gutterBottom>
                            Instagram
                        </Typography>
                        <Box component="form" sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 3,
                            padding:4
                        }}>

                            <TextField label="User Name" fullWidth></TextField>
                            <TextField label="Password" fullWidth></TextField>
                            <TextField label="Confirm Password" fullWidth></TextField>
                            <TextField label="Email Address" fullWidth></TextField>
                            <TextField label="Address" fullWidth></TextField>
                            {/* <Button variant='contained'>
                                Login
                            </Button> */}
                            <Button variant='contained' onClick={() => {
                                // setModalOpen(true);
                                setDrawerOpen(false)
                            }}>
                                Sign Up
                            </Button>
                        </Box>

                </Box>

            </Drawer>

        </Container>
    )
}

export default MULogin