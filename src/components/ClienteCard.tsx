"use client";

import { useState } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Typography,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { ICliente } from "typings/ICliente.d";
import ModalDelete from "./cliente/ModalDelete";
import ModalEditar from "./cliente/ModalEditar";

export default function ClienteCard({ cliente }: { cliente: ICliente }) {
  const [open, setOpen] = useState(false);
  const [openPut, setPut] = useState(false);

  const handleDelete = () => setOpen(!open);
  const handlePut = () => setPut(!openPut);

  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={cliente.nome}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Nome: {cliente.nome}
          Documento: {cliente.tipoDocumento}
          Número do documento: {cliente.numeroDocumento}
          <br />
          <br />
          UF: {cliente.uf}
          Cidade: {cliente.cidade}
          Bairro: {cliente.bairro}
          Logradouro: {cliente.logradouro}
          Número: {cliente.numero}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="aeditar" onClick={handlePut}>
          Editar
        </IconButton>
        <IconButton aria-label="excluir" onClick={handleDelete}>
          Excluir
        </IconButton>
      </CardActions>
      <ModalDelete cliente={cliente} handle={handleDelete} open={open} />
      <ModalEditar cliente={cliente} handle={handlePut} open={openPut} />
    </Card>
  );
}
