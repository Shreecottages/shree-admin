import React from 'react';

import { Box, Typography, TextField, Button } from '@mui/material';
import { useTheme } from '@mui/material';

// import { Link } from 'react-router-dom';

const LogIn = () => {
  const theme = useTheme();
  return (
    <Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <Typography sx={{ fontSize: '3rem' }}>Log in</Typography>

        <Box sx={{ width: '30vw' }}>
          <Typography sx={{ fontSize: '1vw', fontFamily:"Poppins"}}>Username</Typography>
          <TextField sx={{ width: '100%', fontFamily:"Poppins", marginTop:"1vh" }} id="email" label="Enter Email" variant="outlined" />

          <Typography sx={{ fontSize: '1vw', marginTop: '4vh', fontFamily:"Poppins" }}>Pasword</Typography>
          <TextField sx={{ width: '100%', fontFamily:"Poppins", marginTop:"1vh" }} id="email" label="Enter Password" variant="outlined" />

          <Box sx={{ width: '100%', display: 'flex', justifyContent: 'right', marginTop: '3vh' }}>
            <Button sx={{ background: theme.palette.secondary.dark, color:"white" }}>Login</Button>
          </Box>

          <Typography sx={{marginTop:"2vh", color:theme.palette.secondary.dark, fontFamily:"Poppins"}}>Don&apos;t have an Account? Register</Typography>          
        {/* <Link></Link> */}
        </Box>
      </Box>
    </Box>
  );
};

export default LogIn;
