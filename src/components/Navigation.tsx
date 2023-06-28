"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Box, BottomNavigation, BottomNavigationAction } from "@mui/material";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import PersonIcon from '@mui/icons-material/Person';
import HailIcon from '@mui/icons-material/Hail';
import CarCrashIcon from '@mui/icons-material/CarCrash';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import EmojiTransportationIcon from '@mui/icons-material/EmojiTransportation';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import NightsStayIcon from '@mui/icons-material/NightsStay';

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
          icon={<HailIcon />}
        />
        <BottomNavigationAction
          onClick={() => router.push("/condutor")}
          label="Condutor"
          icon={<PersonIcon />}
        />
        <BottomNavigationAction
          onClick={() => router.push("/deslocamento")}
          label="Deslocamento"
          icon={<EmojiTransportationIcon />}
        />
        <BottomNavigationAction
          onClick={() => router.push("/veiculo")}
          label="Veículo"
          icon={<DirectionsCarIcon />}
        />
        <BottomNavigationAction
          onClick={() => router.push("/weatherforecast")}
          label="WeatherForecast"
          icon={<NightsStayIcon />}
        />
      </BottomNavigation>
    </Box>
  );
}
