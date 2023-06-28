import { useState } from "react";
import {Box, Button, Typography, Modal, TextField} from "@mui/material";
import VeiculoDataService from "app/services/veiculo.service";

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

export default function NewClient({
  handle,
  open,
}: {
  handle: () => void;
  open: boolean;
}) {
  const [placa, setPlaca] = useState("");
  const [marcaModelo, setMarcaModelo] = useState("");
  const [anoFabricacao, setAnoFabricacao] = useState<number>();
  const [kmAtual, setKmAtual] = useState<number>();

  const execute = async () => {
    const body = {
      placa,
      marcaModelo,
      anoFabricacao,
      kmAtual,
    };

    VeiculoDataService.create(body);
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
            Cadastro de veículo
          </Typography>
          <TextField
            label="Placa"
            onChange={(e) => setPlaca(e.target.value)}
            required
            variant="outlined"
            color="secondary"
            type="text"
            sx={{ mb: 3 }}
            fullWidth
            value={placa}
          />
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
          <Button onClick={execute} aria-label="cadastrar veículo">
            Cadastrar
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
