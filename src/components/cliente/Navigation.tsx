"use client";

import { useState } from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import ModalNewClient from "./ModalNew";


export default function NavigationCliente() {
  const [value, setValue] = useState(0);
  const [open, setOpen] = useState(false);
  const newModal = () => setOpen(!open);


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
        <BottomNavigationAction onClick={newModal} label="Cadastro de cliente" icon={<RestoreIcon />} />
      </BottomNavigation>
      <ModalNewClient handle={newModal} open={open} />

    </Box>
  );
}