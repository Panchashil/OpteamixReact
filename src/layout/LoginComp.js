import React, { useState } from 'react';
import {Avatar,Button,CssBaseline,TextField,FormControlLabel,Checkbox,Link,Paper,Box,Grid,Typography,createTheme,ThemeProvider} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import staticdata from '../shared/constant/constantData';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const defaultTheme = createTheme();

const LoginComp = () => {
      const nav = useNavigate()
  // const [users,setUsers] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        let  email= data.get('email');
        let  password=data.get('password');
         
        axios.get("http://localhost:8888/users").then((res)=>{
          // console.log(res.data);
          // setUsers(res.data);
          // const currentUser = users.filter((val)=> val.uid===email && val.upass===password);
          const currentUser = res.data.filter((val)=> val.uid===email && val.upass===password);
          if(currentUser.length > 0){
               sessionStorage.setItem("user",email);
            nav("/maindashboard");
          }else{
            window.alert("Wrong Credential");
          }

        }).catch((error)=>{
          console.log("error while fetching data",error.message);
        })
      };


    return (
        <div>
            {/* <h2>This is Login components</h2> */}
            <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
               'url("https://th.bing.com/th/id/R.1d45ea3457dad313b358eb30d9e98f11?rik=WE7VKbNCXeLijg&riu=http%3a%2f%2fwww.hdwallpaperspulse.com%2fwp-content%2fuploads%2f2016%2f03%2f03%2forange-flower-image.jpg&ehk=L9aVtvL1nFBBDKqUZT8SUWexz6EaNNvhUeoluyBeyKA%3d&risl=&pid=ImgRaw&r=0")',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'left',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              {/* <Copyright sx={{ mt: 5 }} /> */}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
        </div>
    )
}

export default LoginComp
