import { useEffect, useState } from "react";
import {Box, Button, Typography, Modal} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CondutorDataService from "app/services/condutor.service";
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

export default function BasicModal({
  condutor,
  handle,
  open,
}: {
  condutor: ICondutor;
  handle: () => void;
  open: boolean;
}) {
  const [id, setId] = useState<ICondutor["id"]>(condutor.id);
  const [nome, setNome] = useState<ICondutor["nome"]>(condutor.nome);

  useEffect(() => {
    setId(condutor.id);
    setNome(condutor.nome);
  }, [condutor]);

  const execute = async () => {
    await CondutorDataService.delete(id);
    handle();
  };
  
  return (
    <Modal
      component={"div"}
      open={open}
      onClose={handle}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Exclusão de condutor
          <CloseIcon onClick={handle} />

        </Typography>
        <Typography
          id="modal-modal-description"
          sx={{ mt: 2 }}
          component={"div"}
        >
          {nome}
        </Typography>
        <Typography id="modal-modal-title" component={"div"}>
          Realmente deseja excluir este condutor?
        </Typography>
        <Button onClick={execute} aria-label="excluir condutor">
          Excluir
        </Button>
      </Box>
    </Modal>
  );
}
