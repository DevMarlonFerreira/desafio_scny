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

const URL = "https://api-deslocamento.herokuapp.com/api/v1/Cliente";

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
  const [numeroDocumento, setNumeroDocumento] = useState("");
  const [email, setEmail] = useState("");
  const [tipoDocumento, setTipoDocumento] = useState("");
  const [nome, setNome] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [numero, setNumero] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [uf, setUf] = useState("");

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
            label="Nome"
            onChange={(e) => setNome(e.target.value)}
            required
            variant="outlined"
            color="secondary"
            type="nome"
            sx={{ mb: 3 }}
            fullWidth
            value={nome}
            // error={emailError}
          />
          <Button aria-label="cadastrar cliente">Cadastrar</Button>
        </Box>
      </Modal>
    </div>
  );
}
