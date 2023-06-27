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
  const [kmInicial, setKmInicial] = useState<IDeslocamento["kmInicial"]>(deslocamento.kmInicial);
  const [kmFinal, setKmFinal] = useState<IDeslocamento["kmFinal"]>(deslocamento.kmFinal);
  const [inicioDeslocamento, setInicioDeslocamento] = useState<IDeslocamento["inicioDeslocamento"]>(deslocamento.inicioDeslocamento);
  const [fimDeslocamento, setFimDeslocamento] = useState<IDeslocamento["fimDeslocamento"]>(deslocamento.fimDeslocamento);
  const [checkList, setCheckList] = useState<IDeslocamento["checkList"]>(deslocamento.checkList);
  const [motivo, setMotivo] = useState<IDeslocamento["motivo"]>(deslocamento.motivo);
  const [observacao, setObservacao] = useState<IDeslocamento["observacao"]>(deslocamento.observacao);
  const [idCondutor, setIdCondutor] = useState<IDeslocamento["idCondutor"]>(deslocamento.idCondutor);
  const [idVeiculo, setIdVeiculo] = useState<IDeslocamento["idVeiculo"]>(deslocamento.idVeiculo);
  const [idCliente, setIdCliente] = useState<IDeslocamento["idCliente"]>(deslocamento.idCliente);

  // useEffect(() => {
  //   setCategoriaHabilitacao(deslocamento.categoriaHabilitacao);
  //   setVencimentoHabilitacao(deslocamento.vencimentoHabilitacao);
  // }, [deslocamento]);

  const execute = async () => {
    const body = {
      id: deslocamento.id,
    };

    console.log(body);

    await DeslocamentoDataService.update(body, deslocamento.id).catch((error) => {
      console.log(error);
    });
    handle();
  };

  // const callBackCalendar = (date: Date) => {
  //   setVencimentoHabilitacao(date.toISOString());
  // };

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
          {/* <Calendar date={vencimentoHabilitacao} callback={callBackCalendar} /> */}
        </Typography>
        <Button onClick={execute} aria-label="editar cliente">
          Salvar
        </Button>
      </Box>
    </Modal>
  );
}
