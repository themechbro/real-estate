import { Box } from "@mui/joy";
import React, { useState } from "react";
import { housesData } from "../data/data";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Chip,
  Stack,
  Paper,
  Grid,
} from "@mui/material";
import BedIcon from "@mui/icons-material/Bed";
import BathtubIcon from "@mui/icons-material/Bathtub";
import AspectRatioIcon from "@mui/icons-material/AspectRatio";
import { useDispatch } from "react-redux";
import { viewProperty } from "../Redux/Actions/actions";
import { Link } from "react-router-dom";
import Price from "./filters/price";
import Type from "./filters/type";
import Location from "./filters/location";

export default function List() {
  const dispatch = useDispatch();
  const [selectedPrice, setSelectedPrice] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");

  const handleClick = (item) => {
    dispatch(viewProperty(item));
    console.log("Dispatched", item);
  };

  const filterHouses = () => {
    return housesData.filter((item) => {
      const priceRange = selectedPrice.split(" - ");
      if (
        selectedPrice &&
        priceRange.length === 2 &&
        (item.price < parseInt(priceRange[0]) ||
          item.price > parseInt(priceRange[1]))
      ) {
        return false;
      }

      if (
        selectedType &&
        selectedType !== "Any Type" &&
        item.type !== selectedType
      ) {
        return false;
      }

      if (
        selectedLocation &&
        selectedLocation !== "Any location" &&
        item.country !== selectedLocation
      ) {
        return false;
      }

      return true;
    });
  };

  return (
    <Box sx={{ padding: { xs: 1, sm: 2, md: 4 } }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "center",
          gap: 2,
          mb: 2,
        }}
      >
        <Price
          selectedPrice={selectedPrice}
          setSelectedPrice={setSelectedPrice}
        />
        <Type selectedType={selectedType} setSelectedType={setSelectedType} />
        <Location
          selectedLocation={selectedLocation}
          setSelectedLocation={setSelectedLocation}
        />
      </Box>
      <Grid container spacing={2} sx={{ justifyContent: "center" }}>
        {filterHouses().map((item) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
            <Paper
              elevation={4}
              sx={{
                borderRadius: 4,
                cursor: "pointer",
                textDecoration: "none",
                display: "flex",
                flexDirection: "column",
                height: "100%",
              }}
              onClick={() => handleClick(item)}
              component={Link}
              to={`/property/${item.id}`}
            >
              <Card sx={{ height: "100%" }}>
                <CardMedia
                  component="img"
                  height="240"
                  image={item.imageLg}
                  alt="Property"
                  sx={{
                    borderRadius: "16px",
                    borderBottomLeftRadius: 0,
                    borderBottomRightRadius: 0,
                    objectFit: "cover",
                  }}
                />
                <CardContent>
                  <Stack direction="row" spacing={1} mb={1}>
                    <Chip label={item.type} color="primary" />
                    <Chip label={item.country} color="error" />
                  </Stack>
                  <Typography variant="h6" component="div" sx={{ mb: 1 }}>
                    {item.address}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      mb: 1,
                    }}
                  >
                    <Box
                      sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
                    >
                      <BedIcon />
                      <Typography>{item.bedrooms}</Typography>
                    </Box>
                    <Box
                      sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
                    >
                      <BathtubIcon />
                      <Typography>{item.bathrooms}</Typography>
                    </Box>
                    <Box
                      sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
                    >
                      <AspectRatioIcon />
                      <Typography>{item.surface} sq ft</Typography>
                    </Box>
                  </Box>
                  <Typography variant="h5" sx={{ color: "red" }}>
                    {item.price}
                  </Typography>
                </CardContent>
              </Card>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

// import { Box } from "@mui/joy";
// import React, { useState } from "react";
// import { housesData } from "../data/data";
// import {
//   Card,
//   CardMedia,
//   CardContent,
//   Typography,
//   Chip,
//   Stack,
//   Paper,
// } from "@mui/material";
// import BedIcon from "@mui/icons-material/Bed";
// import BathtubIcon from "@mui/icons-material/Bathtub";
// import AspectRatioIcon from "@mui/icons-material/AspectRatio";
// import { useDispatch } from "react-redux";
// import { viewProperty } from "../Redux/Actions/actions";
// import { Link } from "react-router-dom";
// import Price from "./filters/price";
// import Type from "./filters/type";
// import Location from "./filters/location";

// export default function List() {
//   const dispatch = useDispatch();
//   const [selectedPrice, setSelectedPrice] = useState("");
//   const [selectedType, setSelectedType] = useState("");
//   const [selectedLocation, setSelectedLocation] = useState("");

//   const handleClick = (item) => {
//     dispatch(viewProperty(item));
//     console.log("Dispatched", item);
//   };

//   const filterHouses = () => {
//     return housesData.filter((item) => {
//       const priceRange = selectedPrice.split(" - ");
//       if (
//         selectedPrice &&
//         priceRange.length === 2 &&
//         (item.price < parseInt(priceRange[0]) ||
//           item.price > parseInt(priceRange[1]))
//       ) {
//         return false;
//       }

//       if (
//         selectedType &&
//         selectedType !== "Any Type" &&
//         item.type !== selectedType
//       ) {
//         return false;
//       }

//       if (
//         selectedLocation &&
//         selectedLocation !== "Any location" &&
//         item.country !== selectedLocation
//       ) {
//         return false;
//       }

//       return true;
//     });
//   };

//   return (
//     <Box>
//       <Box
//         sx={{
//           padding: 2,
//           display: "flex",
//           justifyContent: "center",
//           flexWrap: "wrap",
//         }}
//       >
//         <Price
//           selectedPrice={selectedPrice}
//           setSelectedPrice={setSelectedPrice}
//         />
//         <Type selectedType={selectedType} setSelectedType={setSelectedType} />
//         <Location
//           selectedLocation={selectedLocation}
//           setSelectedLocation={setSelectedLocation}
//         />
//       </Box>
//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: "row",
//           flexWrap: "wrap",
//           width: "100%",
//           justifyContent: "space-evenly",
//         }}
//       >
//         {filterHouses().map((item) => (
//           <Paper
//             elevation={4}
//             sx={{
//               boxShadow: 3,
//               margin: 2,
//               borderRadius: 4,
//               cursor: "pointer",
//               textDecoration: "none",
//             }}
//             key={item.id}
//             onClick={() => handleClick(item)}
//             component={Link}
//             to={`/property/${item.id}`}
//           >
//             <Card sx={{ width: 345 }}>
//               <CardMedia
//                 component="img"
//                 height="240"
//                 image={item.imageLg}
//                 alt="Property"
//                 sx={{
//                   borderRadius: "16px",
//                   borderBottomLeftRadius: 0,
//                   borderBottomRightRadius: 0,
//                 }}
//               />
//               <CardContent>
//                 <Stack direction="row" spacing={1}>
//                   <Chip label={item.type} color="primary" />
//                   <Chip label={item.country} color="error" />
//                 </Stack>
//                 <Typography variant="h6" component="div" sx={{ mt: 1 }}>
//                   {item.address}
//                 </Typography>
//                 <Box
//                   sx={{
//                     display: "flex",
//                     alignItems: "center",
//                     gap: 2,
//                     mt: 1,
//                   }}
//                 >
//                   <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
//                     <BedIcon />
//                     <Typography>{item.bedrooms}</Typography>
//                   </Box>
//                   <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
//                     <BathtubIcon />
//                     <Typography>{item.bathrooms}</Typography>
//                   </Box>
//                   <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
//                     <AspectRatioIcon />
//                     <Typography>{item.surface} sq ft</Typography>
//                   </Box>
//                 </Box>
//                 <Typography variant="h5" sx={{ color: "red", mt: 1 }}>
//                   {item.price}
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Paper>
//         ))}
//       </Box>
//     </Box>
//   );
// }
