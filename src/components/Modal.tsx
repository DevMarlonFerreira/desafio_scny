import * as React from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import IconButton from "@mui/material/IconButton";

import { ICliente } from "../typings/ICliente.d";

const URL = "https://api-deslocamento.herokuapp.com/api/v1/Cliente";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({
  cliente,
  handle,
  open,
}: {
  cliente: ICliente;
  handle: () => void;
  open: boolean;
}) {
  const execute = async () => {
    console.log(`${URL}/${cliente.id}`);
    await axios.delete(`${URL}/${cliente.id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      data: { "id": cliente.id }
    });
    handle();
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handle}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Exclusão de cliente
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {cliente.nome}
          </Typography>
          <Typography id="modal-modal-title">
            Realmente deseja excluir este cliente?
          </Typography>
          <Button onClick={execute} aria-label="excluir cliente">
            Excluir
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
