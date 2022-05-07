import { Copyright } from '@/components';
import { LockOutlined } from '@mui/icons-material';
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Link,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import { NextPage } from 'next';
import {
  FacebookLoginButton,
  GithubLoginButton,
  GoogleLoginButton,
} from 'react-social-login-buttons';

const styleLoginButtons = {
  marginBottom: '16px',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderSizing: 'border-box',
  outline: 0,
  margin: 0,
  border: 0,
  width: '100%',
  userSelect: 'none',
  textDecoration: 'none',
  fontFamily: 'Roboto',
  fontWeight: 500,
  fontSize: '0.875rem',
  borderRaduis: '4px',
};

const Login: NextPage = () => {
  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: 'url(https://source.unsplash.com/random)',
          backgroundRepeat: 'no-repeat',
          backgroundColor: ({ palette: { mode, grey } }) =>
            mode === 'light' ? grey[50] : grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 4,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ bgcolor: 'secondary.main' }}>
            <LockOutlined />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign In
          </Typography>
          <Box component="form" noValidate onSubmit={() => {}} sx={{ mt: 1 }}>
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
            <GoogleLoginButton style={styleLoginButtons} />
            <FacebookLoginButton style={styleLoginButtons} />
            <GithubLoginButton style={styleLoginButtons} />
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot Password
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Copyright />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Login;
