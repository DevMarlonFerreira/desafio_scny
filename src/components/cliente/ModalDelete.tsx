import ClienteDataService from "../../app/services/cliente.service";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import { ICliente } from "../../typings/ICliente.d";

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
    await ClienteDataService.delete(cliente.id)
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
