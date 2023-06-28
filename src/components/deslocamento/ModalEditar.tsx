import { useState, useEffect } from "react";

import DeslocamentoDataService from "app/services/deslocamento.service";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";

import { IDeslocamento } from "typings/IDeslocamento.d";

import Calendar from "../Calendar";

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
  deslocamento,
  handle,
  open,
}: {
  deslocamento: IDeslocamento;
  handle: () => void;
  open: boolean;
}) {
  const [kmFinal, setKmFinal] = useState<IDeslocamento["kmFinal"]>(
    deslocamento.kmFinal
  );
  const [fimDeslocamento, setFimDeslocamento] = useState<
    IDeslocamento["fimDeslocamento"]
  >(deslocamento.inicioDeslocamento);
  const [observacao, setObservacao] = useState<IDeslocamento["observacao"]>(
    deslocamento.observacao
  );

  const execute = async () => {
    const body = {
      id: deslocamento.id,
      kmFinal,
      fimDeslocamento,
      observacao,
    };

    await DeslocamentoDataService.update(body, deslocamento.id).catch(
      (error) => {
        console.log(error);
      }
    );
    handle();
  };

  const callBackCalendar = (date: Date) => {
    setFimDeslocamento(date.toISOString());
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
          Edição de deslocamento
        </Typography>
        <Typography
          id="modal-modal-description"
          sx={{ mt: 2 }}
          component={"span"}
        >
          <TextField
            label="Quilômetro final"
            onChange={(e) => setKmFinal(parseInt(e.target.value))}
            required
            variant="outlined"
            color="secondary"
            type="text"
            sx={{ mb: 3 }}
            fullWidth
            value={kmFinal}
          />
          <Calendar date={fimDeslocamento} callback={callBackCalendar} />
          <TextField
            label="Observação"
            onChange={(e) => setObservacao(e.target.value)}
            required
            variant="outlined"
            color="secondary"
            type="text"
            sx={{ mb: 3 }}
            fullWidth
            value={observacao}
          />
        </Typography>
        <Button onClick={execute} aria-label="editar deslocamento">
          Salvar
        </Button>
      </Box>
    </Modal>
  );
}
