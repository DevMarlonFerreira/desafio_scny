"use client";

import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import { ICliente } from "../typings/ICliente.d";

import BasicModal from "./Modal";

export default function ClienteCard({ cliente }: { cliente: ICliente }) {
  const [open, setOpen] = React.useState(false);

  const handleDelete = () => setOpen(!open);

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
        <IconButton aria-label="add to favorites">
          Editar
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share" onClick={handleDelete}>
          Excluir
          <ShareIcon />
        </IconButton>
      </CardActions>
      <BasicModal cliente={cliente} handle={handleDelete} open={open}/>
    </Card>
  );
}
// map(arg0: (cliente: any) => import("react").JSX.Element): import("react").ReactNode;
