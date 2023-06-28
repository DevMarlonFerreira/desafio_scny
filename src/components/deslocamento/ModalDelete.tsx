import { useEffect, useState } from "react";
import {Box, Button, Typography, Modal} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import DeslocamentoDataService from "app/services/deslocamento.service";
import { IDeslocamento } from "typings/IDeslocamento.d";
import style from "app/styles/box";

export default function BasicModal({
  deslocamento,
  handle,
  open,
}: {
  deslocamento: IDeslocamento;
  handle: () => void;
  open: boolean;
}) {
  const [id, setId] = useState<IDeslocamento["id"]>(deslocamento.id);
  const [checkList, setCheckList] = useState<IDeslocamento["checkList"]>(deslocamento.checkList);

  useEffect(() => {
    setId(deslocamento.id);
    setCheckList(deslocamento.checkList);
  }, [deslocamento]);

  const execute = async () => {
    await DeslocamentoDataService.delete(id);
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
          Fim de deslocamento
          <CloseIcon onClick={handle} />
        </Typography>
        <Typography
          id="modal-description"
          sx={{ mt: 2 }}
          component={"div"}
        >
          {checkList}
        </Typography>
        <Typography id="modal-title" component={"div"}>
          Deseja finalizar este deslocamento?
        </Typography>
        <Button onClick={execute} aria-label="excluir condutor">
          Finalizar
        </Button>
      </Box>
    </Modal>
  );
}
