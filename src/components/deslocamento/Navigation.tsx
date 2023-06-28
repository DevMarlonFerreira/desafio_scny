"use client";

import { useState } from "react";
import { Box, BottomNavigation, BottomNavigationAction } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ModalNew from "./ModalNew";

export default function Navigation() {
  const [value, setValue] = useState(0);
  const [open, setOpen] = useState(false);
  const newModal = () => setOpen(!open);

  return (
    <>
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
            label="Cadastro de deslocamento"
            icon={<AddIcon />}
          />
        </BottomNavigation>
      </Box>
      <ModalNew handle={newModal} open={open} />
    </>
  );
}
