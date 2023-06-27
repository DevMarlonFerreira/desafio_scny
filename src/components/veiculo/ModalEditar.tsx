import { useState, useEffect } from "react";

import VeiculoDataService from "app/services/veiculo.service";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";

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
  const [marcaModelo, setMarcaModelo] = useState<IVeiculo["marcaModelo"]>(veiculo.marcaModelo);
  const [anoFabricacao, setAnoFabricacao] = useState<IVeiculo["anoFabricacao"]>(veiculo.anoFabricacao);
  const [kmAtual, setKmAtual] = useState<IVeiculo["kmAtual"]>(veiculo.kmAtual);

  useEffect(() => {
    setMarcaModelo(veiculo.marcaModelo);
    setAnoFabricacao(veiculo.anoFabricacao);
    setKmAtual(veiculo.kmAtual);
  }, [veiculo]);

  const execute = async () => {
    const body = {
      id: veiculo.id,
      marcaModelo,
      anoFabricacao,
      kmAtual,
    };

    await VeiculoDataService.update(body, veiculo.id);
    handle();
  };

  return (
    <Modal
      open={open}
      onClose={handle}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      component={"div"}
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Edição de veículo
        </Typography>
        <Typography
          id="modal-modal-description"
          sx={{ mt: 2 }}
          component={"span"}
        >
          <TextField
            label="Modelo"
            onChange={(e) => setMarcaModelo(e.target.value)}
            required
            variant="outlined"
            color="secondary"
            type="text"
            sx={{ mb: 3 }}
            fullWidth
            value={marcaModelo}
          />
          <TextField
            label="Ano de fabricação"
            onChange={(e) => setAnoFabricacao(parseInt(e.target.value))}
            required
            variant="outlined"
            color="secondary"
            type="text"
            sx={{ mb: 3 }}
            fullWidth
            value={anoFabricacao}
          />
          <TextField
            label="Quilometragem"
            onChange={(e) => setKmAtual(parseInt(e.target.value))}
            required
            variant="outlined"
            color="secondary"
            type="text"
            sx={{ mb: 3 }}
            fullWidth
            value={kmAtual}
          />
        </Typography>
        <Button onClick={execute} aria-label="editar veículo">
          Salvar
        </Button>
      </Box>
    </Modal>
  );
}
