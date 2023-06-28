import { useState, useEffect } from "react";
import { Box, Button, Typography, Modal, TextField } from "@mui/material";
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
  const [marcaModelo, setMarcaModelo] = useState<IVeiculo["marcaModelo"]>(
    veiculo.marcaModelo
  );
  const [anoFabricacao, setAnoFabricacao] = useState<IVeiculo["anoFabricacao"]>(
    veiculo.anoFabricacao
  );
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
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      component={"div"}
    >
      <Box sx={style}>
        <CloseIcon
          onClick={handle}
          style={{ float: "right", cursor: "pointer" }}
        />
        <Typography id="modal-title" variant="h6" component="h2">
          Edição de veículo
        </Typography>
        <Typography id="modal-description" sx={{ mt: 2 }} component={"span"}>
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
