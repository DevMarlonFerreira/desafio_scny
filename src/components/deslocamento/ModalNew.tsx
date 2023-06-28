import { useState } from "react";
import { Box, Button, Typography, Modal, TextField } from "@mui/material";
import DeslocamentoDataService from "app/services/deslocamento.service";
import { IDeslocamento } from "typings/IDeslocamento.d";
import Calendar from "../Calendar";
import style from "app/styles/box";

export default function BasicModal({
  handle,
  open,
}: {
  handle: () => void;
  open: boolean;
}) {
  const [kmInicial, setKmInicial] = useState<IDeslocamento["kmInicial"]>();
  const [inicioDeslocamento, setInicioDeslocamento] = useState<
    IDeslocamento["inicioDeslocamento"]
  >(new Date());
  const [checkList, setCheckList] = useState<IDeslocamento["checkList"]>("");
  const [motivo, setMotivo] = useState<IDeslocamento["motivo"]>("");
  const [observacao, setObservacao] = useState<IDeslocamento["observacao"]>("");
  const [idCondutor, setIdCondutor] = useState<IDeslocamento["idCondutor"]>();
  const [idVeiculo, setIdVeiculo] = useState<IDeslocamento["idVeiculo"]>();
  const [idCliente, setIdCliente] = useState<IDeslocamento["idCliente"]>();

  const execute = async () => {
    const body = {
      kmInicial,
      inicioDeslocamento,
      checkList,
      motivo,
      observacao,
      idCondutor,
      idVeiculo,
      idCliente,
    };

    await DeslocamentoDataService.create(body).catch((error) => {
      console.log(error);
    });
    handle();
  };

  const callBackCalendar = (date: Date) => {
    setInicioDeslocamento(date.toISOString());
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
            label="Quilômetro inicial"
            onChange={(e) => setKmInicial(parseInt(e.target.value))}
            required
            variant="outlined"
            color="secondary"
            type="text"
            sx={{ mb: 3 }}
            fullWidth
            value={kmInicial}
          />
          <Calendar date={inicioDeslocamento} callback={callBackCalendar} />
          <TextField
            label="CheckList"
            onChange={(e) => setCheckList(e.target.value)}
            required
            variant="outlined"
            color="secondary"
            type="text"
            sx={{ mb: 3 }}
            fullWidth
            value={checkList}
          />
          <TextField
            label="Motivo"
            onChange={(e) => setMotivo(e.target.value)}
            required
            variant="outlined"
            color="secondary"
            type="text"
            sx={{ mb: 3 }}
            fullWidth
            value={motivo}
          />
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
          <TextField
            label="Condutor"
            onChange={(e) => setIdCondutor(parseInt(e.target.value))}
            required
            variant="outlined"
            color="secondary"
            type="text"
            sx={{ mb: 3 }}
            fullWidth
            value={idCondutor}
          />
          <TextField
            label="Veículo "
            onChange={(e) => setIdVeiculo(parseInt(e.target.value))}
            required
            variant="outlined"
            color="secondary"
            type="text"
            sx={{ mb: 3 }}
            fullWidth
            value={idVeiculo}
          />
          <TextField
            label="Cliente"
            onChange={(e) => setIdCliente(parseInt(e.target.value))}
            required
            variant="outlined"
            color="secondary"
            type="text"
            sx={{ mb: 3 }}
            fullWidth
            value={idCliente}
          />
        </Typography>
        <Button onClick={execute} aria-label="editar deslocamento">
          Salvar
        </Button>
      </Box>
    </Modal>
  );
}
