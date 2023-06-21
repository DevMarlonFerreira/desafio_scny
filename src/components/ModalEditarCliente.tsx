import axios from "axios";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

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
            Edição de cliente
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {cliente.nome}
          </Typography>
          <Button onClick={execute} aria-label="salvar cliente">
            Salvar
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
