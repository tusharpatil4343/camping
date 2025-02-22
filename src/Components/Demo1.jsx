import { Box, Button, Container, Grid, Link, Paper, TextField, Typography } from '@mui/material'
import { padding, textAlign } from '@mui/system'
import React from 'react'

const Demo1 = () => {
  return (
    <Container
            maxWidth="md"
            sx={{
                height:"100vh",
                // border:"1px solid red",
                display:"flex",
                alignItems:"center",
                justifyContent:"center"
            }}
    >
        <Grid container spacing={2}  alignItems="center" justifyContent="center">

            <Grid item xs={8} md={6} sx={{display:{xs:"none",md:"block",xl:"flex"}}}  >
                <Box component='img'

                src='https://techcrunch.com/wp-content/uploads/2020/11/Instagram-Home.png?resize=64'
                sx={{width:"100%"}}         
                />
                
            </Grid>
            <Grid item xs={12} md={6} alignItems="center" justifyContent="center"  >

                <Paper
                    sx={{
                        padding:5,
                        textAlign:"center",
                        boxShadow:5
                    }}
                >
                    <Typography variant='h4' fontWeight={700} gutterBottom>Instagram</Typography>
                    <Box
                        component='form'
                        sx={{
                            display:"flex",
                            flexDirection:"column",
                            gap:3
                        }}

                    >
                        <TextField label='user name'></TextField>
                        <TextField label='password'></TextField>
                        <Link sx={{
                            cursor:"pointer"
                        }}>ForgotPassword?</Link>
                        <Button variant='contained'>Login</Button>

                    </Box>
                </Paper>

            </Grid>
        </Grid>

    </Container>
  )
}

export default Demo1
