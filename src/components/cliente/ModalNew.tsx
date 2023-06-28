import { useState } from "react";
import {Box, Button, Typography, Modal, TextField} from "@mui/material";
import ClienteDataService from "app/services/cliente.service";
import style from "app/styles/box";

export default function NewClient({
  handle,
  open,
}: {
  handle: () => void;
  open: boolean;
}) {
  const [nome, setNome] = useState("");
  const [tipoDocumento, setTipoDocumento] = useState("");
  const [numeroDocumento, setNumeroDocumento] = useState("");
  const [uf, setUf] = useState("");
  const [cidade, setCidade] = useState("");
  const [bairro, setBairro] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [numero, setNumero] = useState("");

  const execute = async () => {
    const body = {
      nome,
      tipoDocumento,
      numeroDocumento,
      uf,
      cidade,
      bairro,
      logradouro,
      numero,
    };

    ClienteDataService.create(body);
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
            Cadastro de cliente
          </Typography>
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
            label="Tipo de documento"
            onChange={(e) => setTipoDocumento(e.target.value)}
            required
            variant="outlined"
            color="secondary"
            type="text"
            sx={{ mb: 3 }}
            fullWidth
            value={tipoDocumento}
          />
          <TextField
            label="Número do documento"
            onChange={(e) => setNumeroDocumento(e.target.value)}
            required
            variant="outlined"
            color="secondary"
            type="text"
            sx={{ mb: 3 }}
            fullWidth
            value={numeroDocumento}
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
            type="text"
            sx={{ mb: 3 }}
            fullWidth
            value={numero}
          />
          <Button onClick={execute} aria-label="cadastrar cliente">
            Cadastrar
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
