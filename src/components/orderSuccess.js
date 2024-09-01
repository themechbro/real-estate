import React from "react";
import { Container, Typography, Button, Paper, Box, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { Box as JoyBox } from "@mui/joy";

export default function OrderSuccess() {
  return (
    <Container maxWidth="md" sx={{ py: 5, marginTop: 5 }}>
      <Typography variant="h4" gutterBottom align="center">
        Order Successful!
      </Typography>

      <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Thank you for your order!
        </Typography>
        <Typography variant="body1" gutterBottom>
          Your order has been successfully placed. We are currently processing
          it and will send you a confirmation email with the details.
        </Typography>
        <Typography variant="body1" gutterBottom>
          If you have any questions, feel free to contact our support team.
        </Typography>
      </Paper>

      <Box sx={{ mb: 4, textAlign: "center" }}>
        <Typography variant="h6" gutterBottom>
          Order Summary
        </Typography>
        {/* Example Order Summary */}
        <Paper elevation={2} sx={{ p: 2, mb: 2 }}>
          <Typography variant="body1">
            Order Number: <strong>#123456789</strong>
          </Typography>
          <Typography variant="body1">
            Total Amount: <strong>$299.99</strong>
          </Typography>
          <Typography variant="body1">
            Delivery Address:{" "}
            <strong>1234 Main St, Apt 101, Anytown, USA</strong>
          </Typography>
          <Typography variant="body1">
            Estimated Delivery Date: <strong>September 5, 2024</strong>
          </Typography>
        </Paper>
      </Box>

      <Box sx={{ textAlign: "center" }}>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/"
          sx={{ mr: 2 }}
        >
          Go to Home
        </Button>
        <Button
          variant="outlined"
          color="primary"
          component={Link}
          to="/orders"
        >
          View Orders
        </Button>
      </Box>
    </Container>
  );
}
