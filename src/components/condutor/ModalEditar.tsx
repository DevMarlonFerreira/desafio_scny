import { useState, useEffect } from "react";
import {Box, Button, Typography, Modal, TextField} from "@mui/material";
import CondutorDataService from "app/services/condutor.service";
import { ICondutor } from "typings/ICondutor";
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
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      component={"div"}
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Edição de condutor
        </Typography>
        <Typography
          id="modal-modal-description"
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
        <Button onClick={execute} aria-label="editar cliente">
          Salvar
        </Button>
      </Box>
    </Modal>
  );
}
