"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Box, BottomNavigation, BottomNavigationAction } from "@mui/material";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function SimpleBottomNavigation({index}: {index: number}) {
  const router = useRouter();
  const [value, setValue] = useState(index);

  return (
    <Box>
      <BottomNavigation
        showLabels
        value={value}
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
