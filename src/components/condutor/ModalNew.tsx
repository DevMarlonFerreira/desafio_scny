import { useState } from "react";
import { Box, Button, Typography, Modal, TextField } from "@mui/material";
import CondutorDataService from "app/services/condutor.service";
import { ICondutor } from "typings/ICondutor";
import Calendar from "../Calendar";
import style from "app/styles/box";

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
      vencimentoHabilitacao,
    };
    CondutorDataService.create(body).catch((error) => {
      console.log(error);
    });
    handle();
  };

  const callBackCalendar = (date: Date) => {
    setVencimentoHabilitacao(date.toISOString());
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handle}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-title" variant="h6" component="h2">
            Cadastro de condutor
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
          <Button onClick={execute} aria-label="cadastrar condutor">
            Cadastrar
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
