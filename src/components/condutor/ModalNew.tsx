import { useState } from "react";
import CondutorDataService from "app/services/condutor.service";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import Calendar from "../Calendar";

import { ICondutor } from "typings/ICondutor";

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

export default function NewCondutor({
  handle,
  open,
}: {
  handle: () => void;
  open: boolean;
}) {
  const [nome, setNome] = useState<ICondutor["nome"]>("");
  const [numeroHabilitacao, setNumeroHabilitacao] =
    useState<ICondutor["numeroHabilitacao"]>("");
  const [categoriaHabilitacao, setCategoriaHabilitacao] =
    useState<ICondutor["categoriaHabilitacao"]>("");
  const [vencimentoHabilitacao, setVencimentoHabilitacao] = useState<
    ICondutor["vencimentoHabilitacao"]
  >(new Date());

  const execute = async () => {
    const body = {
      nome,
      numeroHabilitacao,
      categoriaHabilitacao,
      vencimentoHabilitacao
    };
    console.log(body)

    CondutorDataService.create(body).catch((error) => {
      console.log(error);
    });
    handle();
  };

  const callBackCalendar = (date: Date) => {
    console.log(date);
    setVencimentoHabilitacao(date.toISOString());
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
            Cadastro de condutor
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
          />
          <TextField
            label="Número da habilitação"
            onChange={(e) => setNumeroHabilitacao(e.target.value)}
            required
            variant="outlined"
            color="secondary"
            type="text"
            sx={{ mb: 3 }}
            fullWidth
            value={numeroHabilitacao}
          />
          <TextField
            label="Catergoria da habilitação"
            onChange={(e) => setCategoriaHabilitacao(e.target.value)}
            required
            variant="outlined"
            color="secondary"
            type="text"
            sx={{ mb: 3 }}
            fullWidth
            value={categoriaHabilitacao}
          />
          <Calendar date={vencimentoHabilitacao} callback={callBackCalendar} />
          <Button onClick={execute} aria-label="cadastrar cliente">
            Cadastrar
          </Button>
        </Box>
      </Modal>
    </div>
  );
}