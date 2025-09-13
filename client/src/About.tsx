import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
} from '@mui/material';
import { Store, People, TrendingUp, Favorite } from '@mui/icons-material';

const About: React.FC = () => {
  const stats = [
    { icon: <Store />, number: '10K+', label: 'Products' },
    { icon: <People />, number: '1M+', label: 'Happy Customers' },
    { icon: <TrendingUp />, number: '99%', label: 'Satisfaction Rate' },
    { icon: <Favorite />, number: '24/7', label: 'Customer Support' },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h3" component="h1" textAlign="center" gutterBottom>
        About ShopEase
      </Typography>
      
      <Box sx={{ mt: 6, mb: 8 }}>
        <Typography variant="h5" component="h2" gutterBottom>
          Our Story
        </Typography>
        <Typography variant="body1" paragraph>
          Founded in 2020, ShopEase began as a small startup with a big dream: to make online 
          shopping accessible, affordable, and enjoyable for everyone. What started as a simple 
          idea has grown into a thriving e-commerce platform serving millions of customers worldwide.
        </Typography>
        <Typography variant="body1" paragraph>
          We believe that shopping should be more than just a transaction – it should be an 
          experience. That's why we've carefully curated our product selection, partnered with 
          trusted brands, and built a platform that puts customer satisfaction at the heart of 
          everything we do.
        </Typography>
      </Box>

      <Box sx={{ mb: 8 }}>
        <Typography variant="h5" component="h2" textAlign="center" gutterBottom>
          Our Mission
        </Typography>
        <Typography variant="body1" textAlign="center" sx={{ maxWidth: 800, mx: 'auto' }}>
          To provide customers with the best online shopping experience through quality products, 
          competitive prices, exceptional service, and innovative technology. We're committed to 
          making your shopping journey smooth, secure, and satisfying.
        </Typography>
      </Box>

      <Grid container spacing={4} sx={{ mb: 8 }}>
        {stats.map((stat, index) => (
          <Grid item xs={6} md={3} key={index}>
            <Card sx={{ textAlign: 'center', p: 3 }}>
              <CardContent>
                <Avatar sx={{ bgcolor: 'primary.main', mx: 'auto', mb: 2 }}>
                  {stat.icon}
                </Avatar>
                <Typography variant="h4" component="div" gutterBottom>
                  {stat.number}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {stat.label}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box>
        <Typography variant="h5" component="h2" gutterBottom>
          What Makes Us Different
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
              Quality Assurance
            </Typography>
            <Typography variant="body2" paragraph>
              Every product in our catalog goes through rigorous quality checks to ensure 
              you receive only the best.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
              Customer First
            </Typography>
            <Typography variant="body2" paragraph>
              Our dedicated support team is available 24/7 to help you with any questions 
              or concerns.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
              Secure Shopping
            </Typography>
            <Typography variant="body2" paragraph>
              Advanced encryption and secure payment gateways protect your personal and 
              financial information.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
              Fast Delivery
            </Typography>
            <Typography variant="body2" paragraph>
              Partner with leading logistics companies to ensure your orders reach you 
              quickly and safely.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default About;