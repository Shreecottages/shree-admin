import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, TextField, Button } from '@mui/material';
import { useTheme } from '@mui/material';

// import { Link } from 'react-router-dom';

const LogIn = () => {

  const [eml, seteml] = useState('');
  const [pass, setpass] = useState('');

  const theme = useTheme();
  const navigate = useNavigate();
  const handleLogin = async () => {

    let response = await fetch('http://13.233.31.166:8000/login', {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: eml, password: pass })
    });
    response = await response.json()

    if (response.token) {
      localStorage.setItem("token", response.token);
      navigate('/dashboard/default');
    }
    else {
      alert(response.message)
    }
  };

  React.useEffect(() => {
    if (localStorage.getItem('token') != null) {
      navigate('/dashboard/default');
    }
  }, [])


  return (
    <Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <Typography sx={{ fontSize: '3rem' }}>Log in</Typography>

        <Box sx={{ width: '30vw' }}>
          <Typography sx={{ fontSize: '1vw', fontFamily: "Poppins" }}>Username</Typography>
          <TextField sx={{ width: '100%', fontFamily: "Poppins", marginTop: "1vh" }} id="email" label="Enter Email" variant="outlined" value={eml} onChange={(e) => seteml(e.target.value)} />

          <Typography sx={{ fontSize: '1vw', marginTop: '4vh', fontFamily: "Poppins" }}>Pasword</Typography>
          <TextField sx={{ width: '100%', fontFamily: "Poppins", marginTop: "1vh" }} id="email" label="Enter Password" variant="outlined" value={pass} onChange={(e) => setpass(e.target.value)} />

          <Box sx={{ width: '100%', display: 'flex', justifyContent: 'right', marginTop: '3vh' }}>
            <Button onClick={handleLogin} sx={{ background: theme.palette.secondary.dark, color: "white" }}>Login</Button>
          </Box>

          <Typography sx={{ marginTop: "2vh", color: theme.palette.secondary.dark, fontFamily: "Poppins" }}>Don&apos;t have an Account? Register</Typography>
          {/* <Link></Link> */}
        </Box>
      </Box>
    </Box>
  );
};

export default LogIn;
