"use client";

import { useState } from "react";
import { Box, BottomNavigation, BottomNavigationAction } from "@mui/material";
import RestoreIcon from "@mui/icons-material/Restore";
import ModalNewClient from "./ModalNew";

export default function NavigationCliente() {
  const [value, setValue] = useState(0);
  const [open, setOpen] = useState(false);
  const newModal = () => setOpen(!open);

  return (
    <Box>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          onClick={newModal}
          label="Cadastro de cliente"
          icon={<RestoreIcon />}
        />
      </BottomNavigation>
      <ModalNewClient handle={newModal} open={open} />
    </Box>
  );
}
