import { useEffect, useState } from "react";
import {Box, Button, Typography, Modal} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import DeslocamentoDataService from "app/services/deslocamento.service";
import { IDeslocamento } from "typings/IDeslocamento.d";

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
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Fim de deslocamento
          <CloseIcon onClick={handle} />
        </Typography>
        <Typography
          id="modal-modal-description"
          sx={{ mt: 2 }}
          component={"div"}
        >
          {checkList}
        </Typography>
        <Typography id="modal-modal-title" component={"div"}>
          Deseja finalizar este deslocamento?
        </Typography>
        <Button onClick={execute} aria-label="excluir condutor">
          Finalizar
        </Button>
      </Box>
    </Modal>
  );
}
