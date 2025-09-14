import React, { ReactNode, useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Avatar,
} from '@mui/material';
import { AccountCircle, ShoppingCart } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import LoginDialog from './LoginDialog';
import SignupDialog from './SignupDialog';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [loginOpen, setLoginOpen] = useState(false);
  const [signupOpen, setSignupOpen] = useState(false);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout();
    handleMenuClose();
    navigate('/');
  };

  const handleLogin = () => {
    setLoginOpen(true);
    handleMenuClose();
  };

  const handleSignup = () => {
    setSignupOpen(true);
    handleMenuClose();
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
              Shopify
            </Link>
          </Typography>
          
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          
          {isAuthenticated && (
            <>
              <Button color="inherit" component={Link} to="/about">
                About
              </Button>
              <Button color="inherit" component={Link} to="/products">
                Products
              </Button>
              <IconButton color="inherit" component={Link} to="/cart">
                <ShoppingCart />
              </IconButton>
            </>
          )}

          <Box sx={{ display: 'flex', alignItems: 'center', ml: 2 }}>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls="primary-search-account-menu"
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              {isAuthenticated ? (
                <Avatar sx={{ width: 32, height: 32, bgcolor: 'secondary.main' }}>
                  {user?.name.charAt(0).toUpperCase()}
                </Avatar>
              ) : (
                <AccountCircle />
              )}
            </IconButton>
            {isAuthenticated && (
              <Typography variant="body2" sx={{ ml: 1 }}>
                {user?.name}
              </Typography>
            )}
          </Box>

          <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            {isAuthenticated ? (
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            ) : (
              [
                <MenuItem key="login" onClick={handleLogin}>Login</MenuItem>,
                <MenuItem key="signup" onClick={handleSignup}>Signup</MenuItem>
              ]
            )}
          </Menu>
        </Toolbar>
      </AppBar>

      <Box component="main" sx={{ minHeight: 'calc(100vh - 64px)' }}>
        {children}
      </Box>

      <LoginDialog open={loginOpen} onClose={() => setLoginOpen(false)} />
      <SignupDialog open={signupOpen} onClose={() => setSignupOpen(false)} />
    </>
  );
};

export default Layout;