"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    // <Box sx={{ width: 500 }}>
    <Box>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Cliente" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Condutor" icon={<FavoriteIcon />} />
        <BottomNavigationAction
          label="Deslocamento"
          icon={<LocationOnIcon />}
        />
        <BottomNavigationAction label="Veículo" icon={<LocationOnIcon />} />
        <BottomNavigationAction
          label="WeatherForecast"
          icon={<LocationOnIcon />}
        />
      </BottomNavigation>
    </Box>
  );
}
