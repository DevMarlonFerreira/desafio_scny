import ClienteDataService from "../../app/services/cliente.service";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";

import { ICliente } from "../../typings/ICliente.d";
import { useState } from "react";

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
  const [nome, setNome] = useState(cliente.nome);
  const [uf, setUf] = useState(cliente.uf);
  const [cidade, setCidade] = useState(cliente.cidade);
  const [bairro, setBairro] = useState(cliente.bairro);
  const [logradouro, setLogradouro] = useState(cliente.logradouro);
  const [numero, setNumero] = useState(cliente.numero);

  const execute = async () => {
    const body = {
      id: cliente.id,
      nome,
      uf,
      cidade,
      bairro,
      logradouro,
      numero,
    }

    await ClienteDataService.update(body, cliente.id)
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
            <TextField
              label="Nome"
              onChange={(e) => setNome(e.target.value)}
              required
              variant="outlined"
              color="secondary"
              type="text"
              sx={{ mb: 3 }}
              fullWidth
              value={nome}
            />
            <TextField
              label="UF"
              onChange={(e) => setUf(e.target.value)}
              required
              variant="outlined"
              color="secondary"
              type="text"
              sx={{ mb: 3 }}
              fullWidth
              value={uf}
            />
            <TextField
              label="Cidade"
              onChange={(e) => setCidade(e.target.value)}
              required
              variant="outlined"
              color="secondary"
              type="text"
              sx={{ mb: 3 }}
              fullWidth
              value={cidade}
            />
            <TextField
              label="Bairro"
              onChange={(e) => setBairro(e.target.value)}
              required
              variant="outlined"
              color="secondary"
              type="text"
              sx={{ mb: 3 }}
              fullWidth
              value={bairro}
            />
            <TextField
              label="Logradouro"
              onChange={(e) => setLogradouro(e.target.value)}
              required
              variant="outlined"
              color="secondary"
              type="text"
              sx={{ mb: 3 }}
              fullWidth
              value={logradouro}
            />
            <TextField
              label="Número"
              onChange={(e) => setNumero(e.target.value)}
              required
              variant="outlined"
              color="secondary"
              type="number"
              sx={{ mb: 3 }}
              fullWidth
              value={numero}
            />
          </Typography>
          <Button onClick={execute} aria-label="editar cliente">
            Salvar
          </Button>
        </Box>
      </Modal>
    </div>
  );
}