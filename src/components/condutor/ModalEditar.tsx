import { useState, useEffect } from "react";
import {Box, Button, Typography, Modal, TextField} from "@mui/material";
import CondutorDataService from "app/services/condutor.service";
import { ICondutor } from "typings/ICondutor";
import Calendar from "../Calendar";
import style from "app/styles/box";

export default function BasicModal({
  condutor,
  handle,
  open,
}: {
  condutor: ICondutor;
  handle: () => void;
  open: boolean;
}) {
  const [categoriaHabilitacao, setCategoriaHabilitacao] = useState<
    ICondutor["categoriaHabilitacao"]
  >(condutor.categoriaHabilitacao);
  const [vencimentoHabilitacao, setVencimentoHabilitacao] = useState<
    ICondutor["vencimentoHabilitacao"]
  >(condutor.vencimentoHabilitacao);

  useEffect(() => {
    setCategoriaHabilitacao(condutor.categoriaHabilitacao);
    setVencimentoHabilitacao(condutor.vencimentoHabilitacao);
  }, [condutor]);

  const execute = async () => {
    const body = {
      id: condutor.id,
      categoriaHabilitacao,
      vencimentoHabilitacao,
    };

    await CondutorDataService.update(body, condutor.id).catch((error) => {
      console.log(error);
    });
    handle();
  };

  const callBackCalendar = (date: Date) => {
    setVencimentoHabilitacao(date.toISOString());
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
        <Typography id="modal-title" variant="h6" component="h2">
          Edição de condutor
        </Typography>
        <Typography
          id="modal-description"
          sx={{ mt: 2 }}
          component={"span"}
        >
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
        </Typography>
        <Button onClick={execute} aria-label="editar condutor">
          Salvar
        </Button>
      </Box>
    </Modal>
  );
}
