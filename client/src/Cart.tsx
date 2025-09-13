import React from 'react';
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Button,
} from '@mui/material';
import { ShoppingCart, ArrowBack } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Cart: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" textAlign="center" gutterBottom>
        My Cart
      </Typography>

      <Box display="flex" justifyContent="center" alignItems="center" minHeight="400px">
        <Card sx={{ maxWidth: 400, textAlign: 'center', p: 4 }}>
          <CardContent>
            <ShoppingCart sx={{ fontSize: 80, color: 'grey.400', mb: 2 }} />
            <Typography variant="h5" gutterBottom>
              Your cart is empty
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              Start shopping to add items to your cart
            </Typography>
            <Button
              variant="contained"
              component={Link}
              to="/products"
              startIcon={<ArrowBack />}
              sx={{ mt: 2 }}
            >
              Continue Shopping
            </Button>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default Cart;