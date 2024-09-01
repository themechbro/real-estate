import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Grid,
  Typography,
  Paper,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  Divider,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { Box } from "@mui/joy";

export default function Checkout() {
  const cart = useSelector((state) => state.view.cart);
  const navigate = useNavigate();

  const totalPrice = cart
    .reduce((acc, current) => {
      const price = parseFloat(current.price); // Convert price to float
      return acc + (isNaN(price) ? 0 : price); // Handle invalid price
    }, 0)
    .toFixed(2); // Format to 2 decimal places

  return (
    <Container maxWidth="md" sx={{ py: 5, marginTop: 10 }}>
      <Typography variant="h4" gutterBottom>
        Checkout
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Your cart ({cart.length} item)
            </Typography>
            <List>
              {cart.map((item, index) => (
                <ListItem key={index} sx={{ py: 1 }}>
                  <Box
                    component="img"
                    src={item.image}
                    alt={item.name}
                    sx={{ width: 80, height: 80, objectFit: "cover", mr: 2 }}
                  />
                  <ListItemText
                    primary={item.title}
                    secondary={item.description}
                    primaryTypographyProps={{ variant: "body1" }}
                    secondaryTypographyProps={{ variant: "body2" }}
                  />
                  <Typography variant="body2">${item.price}</Typography>
                </ListItem>
              ))}
              <Divider />
              <ListItem sx={{ pt: 2, fontWeight: "bold" }}>
                <ListItemText primary="Total (USD)" />
                <Typography variant="h6">${totalPrice}</Typography>
              </ListItem>
            </List>

            <Box sx={{ mt: 3 }}>
              <TextField
                fullWidth
                label="Promo code"
                variant="outlined"
                sx={{ mb: 2 }}
              />
              <Button variant="contained" color="primary" fullWidth>
                Redeem
              </Button>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Billing address
            </Typography>
            <form noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="First name"
                    variant="outlined"
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Last name"
                    variant="outlined"
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Username"
                    variant="outlined"
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Email (Optional)"
                    type="email"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Address"
                    variant="outlined"
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Address 2 (Optional)"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <InputLabel>Country</InputLabel>
                    <Select defaultValue="" variant="outlined">
                      <MenuItem value="">Choose...</MenuItem>
                      <MenuItem value="US">United States</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <InputLabel>State</InputLabel>
                    <Select defaultValue="" variant="outlined">
                      <MenuItem value="">Choose...</MenuItem>
                      <MenuItem value="CA">California</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Zip"
                    variant="outlined"
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Shipping address is the same as my billing address"
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Save this information for next time"
                  />
                </Grid>
              </Grid>

              <Box sx={{ mt: 3 }}>
                <Typography variant="h6" gutterBottom>
                  Payment
                </Typography>
                <FormControl component="fieldset">
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Credit card"
                  />
                  <FormControlLabel control={<Checkbox />} label="Debit card" />
                  <FormControlLabel control={<Checkbox />} label="PayPal" />
                </FormControl>

                <Grid container spacing={2} sx={{ mt: 2 }}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Name on card"
                      variant="outlined"
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Credit card number"
                      variant="outlined"
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Expiration"
                      variant="outlined"
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="CVV"
                      variant="outlined"
                      required
                    />
                  </Grid>
                </Grid>
              </Box>

              <Box sx={{ mt: 3 }}>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={() => navigate("/order_success")}
                >
                  Continue to checkout
                </Button>
              </Box>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
