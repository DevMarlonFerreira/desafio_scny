"use client";

import { useState, useEffect, lazy, useCallback } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CondutorDataService from "app/services/condutor.service";
import { ICondutor } from "typings/ICondutor";
const ModalEditar = lazy(() => import("./ModalEditar"));
// const ModalDelete = lazy(() => import("./ModalDelete"));

export default function BasicTable() {
  const [showPut, setShowPut] = useState(false);
  const [showDel, setShowDel] = useState(false);

  const [rows, setRows] = useState<ICondutor[]>();

  const [condutor, setCondutor] = useState<ICondutor>();

  const handlePut = useCallback(() => setShowPut(!showPut), [showPut]);

  const handleDel = useCallback(() => {
    setShowDel(!showDel);
  }, [showDel]);

  const getData = async () => {
    const { data } = await CondutorDataService.getAll();
    return data;
  };

  useEffect(() => {
    getData().then((data) => {
      setRows(data);
    });
  }, [handleDel, handlePut]);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Nome</TableCell>
            <TableCell align="center">Número da habilitação</TableCell>
            <TableCell align="center">Catergoria de habilitação</TableCell>
            <TableCell align="center">Vencimento da habilitação</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows?.map((row: ICondutor, key: number) => (
            <TableRow
              key={key}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.nome}
              </TableCell>
              <TableCell align="center">{row.numeroHabilitacao}</TableCell>
              <TableCell align="center">{row.catergoriaHabilitacao}</TableCell>
              <TableCell align="center">
                {(row.vencimentoHabilitacao.toString().split("T")[0])}
              </TableCell>
              <TableCell align="center">
                {" "}
                <IconButton
                  aria-label="editar"
                  onClick={() => {
                    setCondutor(row);
                    handlePut();
                  }}
                >
                  Editar
                  <FavoriteIcon />
                </IconButton>
              </TableCell>
              <TableCell align="center">
                {" "}
                <IconButton
                  aria-label="excluir"
                  onClick={() => {
                    setCondutor(row);
                    handleDel();
                  }}
                >
                  Excluir
                  <FavoriteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {condutor && (
        <ModalEditar
          condutor={condutor as ICondutor}
          handle={handlePut}
          open={showPut}
        />
      )}
      {/* {condutor && (
        <ModalDelete
          condutor={condutor as ICondutor}
          handle={handleDel}
          open={showDel}
        />
      )} */}
    </TableContainer>
  );
}
