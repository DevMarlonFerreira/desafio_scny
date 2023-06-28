import { useEffect, useState } from "react";
import {Box, Button, Typography, Modal} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import VeiculoDataService from "app/services/veiculo.service";
import { IVeiculo } from "typings/IVeiculo.d";

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
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Exclusão de veículo
          <CloseIcon onClick={handle} />

        </Typography>
        <Typography
          id="modal-modal-description"
          sx={{ mt: 2 }}
          component={"div"}
        >
          {placa}
        </Typography>
        <Typography id="modal-modal-title" component={"div"}>
          Realmente deseja excluir este veículo?
        </Typography>
        <Button onClick={execute} aria-label="excluir veículo">
          Excluir
        </Button>
      </Box>
    </Modal>
  );
}
