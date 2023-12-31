import { useEffect, useState } from "react";
import { Box, Button, Typography, Modal } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import VeiculoDataService from "app/services/veiculo.service";
import { IVeiculo } from "typings/IVeiculo.d";
import style from "app/styles/box";

export default function BasicModal({
  veiculo,
  handle,
  open,
}: {
  veiculo: IVeiculo;
  handle: () => void;
  open: boolean;
}) {
  const [id, setId] = useState<IVeiculo["id"]>(veiculo.id);
  const [placa, setPlaca] = useState<IVeiculo["placa"]>(veiculo.placa);

  useEffect(() => {
    setId(veiculo.id);
    setPlaca(veiculo.placa);
  }, [veiculo]);

  const execute = async () => {
    await VeiculoDataService.delete(id);
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
        <CloseIcon
          onClick={handle}
          style={{ float: "right", cursor: "pointer" }}
        />
        <Typography id="modal-title" variant="h6" component="h2">
          Exclusão de veículo
        </Typography>
        <Typography id="modal-description" sx={{ mt: 2 }} component={"div"}>
          {placa}
        </Typography>
        <Typography id="modal-title" component={"div"}>
          Realmente deseja excluir este veículo?
        </Typography>
        <Button onClick={execute} aria-label="excluir veículo">
          Excluir
        </Button>
      </Box>
    </Modal>
  );
}
