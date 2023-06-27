"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function SimpleBottomNavigation() {
  const router = useRouter();
  const [value, setValue] = useState(0);

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
        <BottomNavigationAction
          onClick={() => router.push("/cliente")}
          label="Cliente"
          icon={<RestoreIcon />}
        />
        <BottomNavigationAction
          onClick={() => router.push("/condutor")}
          label="Condutor"
          icon={<FavoriteIcon />}
        />
        <BottomNavigationAction
          onClick={() => router.push("/deslocamento")}
          label="Deslocamento"
          icon={<LocationOnIcon />}
        />
        <BottomNavigationAction
          onClick={() => router.push("/veiculo")}
          label="Veículo"
          icon={<LocationOnIcon />}
        />
        <BottomNavigationAction
          onClick={() => router.push("/weatherforecast")}
          label="WeatherForecast"
          icon={<LocationOnIcon />}
        />
      </BottomNavigation>
    </Box>
  );
}
