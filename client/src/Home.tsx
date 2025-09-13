import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from '@mui/material';
import { ShoppingBag, Security, LocalShipping } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useAuth } from './AuthContext';

const Home: React.FC = () => {
  const { isAuthenticated } = useAuth();

  const features = [
    {
      icon: <ShoppingBag sx={{ fontSize: 60, color: 'primary.main' }} />,
      title: 'Wide Selection',
      description: 'Discover thousands of products from top brands worldwide',
    },
    {
      icon: <Security sx={{ fontSize: 60, color: 'primary.main' }} />,
      title: 'Secure Shopping',
      description: 'Shop with confidence using our secure payment system',
    },
    {
      icon: <LocalShipping sx={{ fontSize: 60, color: 'primary.main' }} />,
      title: 'Fast Delivery',
      description: 'Get your orders delivered quickly to your doorstep',
    },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box className="hero-section">
        <Container maxWidth="lg">
          <Typography variant="h2" component="h1" gutterBottom>
            Welcome to ShopEase
          </Typography>
          <Typography variant="h5" component="p" gutterBottom sx={{ mb: 4 }}>
            Your Ultimate Shopping Destination
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, maxWidth: 600, mx: 'auto' }}>
            Discover amazing products, unbeatable prices, and exceptional service. 
            Join millions of satisfied customers who trust ShopEase for all their shopping needs.
          </Typography>
          {isAuthenticated ? (
            <Button
              variant="contained"
              size="large"
              component={Link}
              to="/products"
              sx={{ mr: 2 }}
            >
              Shop Now
            </Button>
          ) : (
            <Typography variant="h6" sx={{ mt: 2 }}>
              Please login to start shopping
            </Typography>
          )}
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h3" component="h2" textAlign="center" gutterBottom>
          Why Choose ShopEase?
        </Typography>
        <Grid container spacing={4} sx={{ mt: 4 }}>
          {features.map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card sx={{ height: '100%', textAlign: 'center', p: 3 }}>
                <CardContent>
                  <Box sx={{ mb: 2 }}>
                    {feature.icon}
                  </Box>
                  <Typography variant="h5" component="h3" gutterBottom>
                    {feature.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* CTA Section */}
      <Box sx={{ bgcolor: 'grey.100', py: 8 }}>
        <Container maxWidth="lg" textAlign="center">
          <Typography variant="h4" component="h2" gutterBottom>
            Ready to Start Shopping?
          </Typography>
          <Typography variant="body1" sx={{ mb: 4 }}>
            Join thousands of happy customers and discover amazing deals today!
          </Typography>
          {!isAuthenticated && (
            <Typography variant="body2" color="text.secondary">
              Create an account or login to access our full catalog
            </Typography>
          )}
        </Container>
      </Box>
    </Box>
  );
};

export default Home;