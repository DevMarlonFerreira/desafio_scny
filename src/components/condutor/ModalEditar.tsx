import { useState, useEffect } from "react";

import CondutorDataService from "app/services/condutor.service";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";

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
  const [nome, setNome] = useState<ICondutor["nome"]>(condutor.nome);
  const [catergoriaHabilitacao, setCatergoriaHabilitacao] = useState<
    ICondutor["catergoriaHabilitacao"]
  >(condutor.catergoriaHabilitacao);
  const [vencimentoHabilitacao, setVencimentoHabilitacao] = useState<
    ICondutor["vencimentoHabilitacao"]
  >(condutor.vencimentoHabilitacao);

  useEffect(() => {
    setNome(condutor.nome);
    setCatergoriaHabilitacao(condutor.catergoriaHabilitacao);
    setVencimentoHabilitacao(condutor.vencimentoHabilitacao);
  }, [condutor]);

  const execute = async () => {
    const body = {
      id: condutor.id,
      nome,
      catergoriaHabilitacao,
      vencimentoHabilitacao,
    };

    await CondutorDataService.update(body, condutor.id);
    handle();
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
            onChange={(e) => setCatergoriaHabilitacao(e.target.value)}
            required
            variant="outlined"
            color="secondary"
            type="text"
            sx={{ mb: 3 }}
            fullWidth
            value={catergoriaHabilitacao}
          />
          <Calendar date={vencimentoHabilitacao}/>
          {/* <TextField
            label="Vencimento da habilitação"
            onChange={(e) => setVencimentoHabilitacao(e.target.value)}
            required
            variant="outlined"
            color="secondary"
            type="date"
            sx={{ mb: 3 }}
            fullWidth
            value={vencimentoHabilitacao}
          /> */}
        </Typography>
        <Button onClick={execute} aria-label="editar cliente">
          Salvar
        </Button>
      </Box>
    </Modal>
  );
}
