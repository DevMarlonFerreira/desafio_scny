import { useEffect, useState } from "react";
import { Box, Button, Typography, Modal } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CondutorDataService from "app/services/condutor.service";
import { ICondutor } from "typings/ICondutor";
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
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-title" variant="h6" component="h2">
          Exclusão de condutor
          <CloseIcon onClick={handle} />
        </Typography>
        <Typography
          id="modal-description"
          sx={{ mt: 2 }}
          component={"div"}
        >
          {nome}
        </Typography>
        <Typography id="modal-title" component={"div"}>
          Realmente deseja excluir este condutor?
        </Typography>
        <Button onClick={execute} aria-label="excluir condutor">
          Excluir
        </Button>
      </Box>
    </Modal>
  );
}
