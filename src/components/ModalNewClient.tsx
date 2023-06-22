import { useState } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import IconButton from "@mui/material/IconButton";

import { ICliente } from "../typings/ICliente.d";

import { TextField } from "@mui/material";
import FormControl from "./FormControl";

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
  const [nome, setNome] = useState("");
  const [tipoDocumento, setTipoDocumento] = useState("");
  const [numeroDocumento, setNumeroDocumento] = useState("");
  const [uf, setUf] = useState("");
  const [cidade, setCidade] = useState("");
  const [bairro, setBairro] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [numero, setNumero] = useState("");

  const execute = async () => {
    await axios.post("https://api-deslocamento.herokuapp.com/api/v1/Cliente", {
      nome,
      tipoDocumento,
      numeroDocumento,
      uf,
      cidade,
      bairro,
      logradouro,
      numero,
    },{
      headers: {
        "Content-Type": "application/json",
      },
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
            Cadastro de cliente
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Novo
          </Typography>
          <Typography id="modal-modal-title"></Typography>
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
            // error={emailError}
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
            // error={tipoDocumento}
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
            // error={emailError}
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
            // error={emailError}
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
            // error={emailError}
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
            // error={emailError}
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
            // error={emailError}
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
            // error={emailError}
          />
          <Button onClick={execute} aria-label="cadastrar cliente">Cadastrar</Button>
        </Box>
      </Modal>
    </div>
  );
}
