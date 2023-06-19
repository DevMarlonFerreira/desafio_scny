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

export default function ClienteCard({ cliente }: { cliente: ICliente }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
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
        <IconButton aria-label="share">
          Excluir
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
