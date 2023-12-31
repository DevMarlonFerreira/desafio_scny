import { useEffect, useState } from "react";
import { Box, Button, Typography, Modal } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ClienteDataService from "app/services/cliente.service";
import { ICliente } from "typings/ICliente.d";
import style from "app/styles/box";

export default function BasicModal({
  cliente,
  handle,
  open,
}: {
  cliente: ICliente;
  handle: () => void;
  open: boolean;
}) {
  const [id, setId] = useState<ICliente["id"]>(cliente.id);
  const [nome, setNome] = useState<ICliente["nome"]>(cliente.nome);

  useEffect(() => {
    setId(cliente.id);
    setNome(cliente.nome);
  }, [cliente]);

  const execute = async () => {
    await ClienteDataService.delete(id);
    handle();
  };

  return (
    <Modal
      component={"div"}
      open={open}
      onClose={handle}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box sx={style}>
        <CloseIcon onClick={handle} style={{ float: "right", cursor: "pointer" }} />
        <Typography id="modal-title" variant="h6" component="h2">
          Exclusão de cliente
        </Typography>
        <Typography id="modal-description" sx={{ mt: 2 }} component={"div"}>
          {nome}
        </Typography>
        <Typography id="modal-title" component={"div"}>
          Realmente deseja excluir este cliente?
        </Typography>
        <Button onClick={execute} aria-label="excluir cliente">
          Excluir
        </Button>
      </Box>
    </Modal>
  );
}
