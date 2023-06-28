"use client";

import { useState, useEffect, lazy, useCallback } from "react";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, TextField, Button} from "@mui/material";
import CondutorDataService from "app/services/condutor.service";
import { ICondutor } from "typings/ICondutor";
const ModalEditar = lazy(() => import("./ModalEditar"));
const ModalDelete = lazy(() => import("./ModalDelete"));

export default function BasicTable() {
  const [showPut, setShowPut] = useState(false);
  const [showDel, setShowDel] = useState(false);

  const [rows, setRows] = useState<ICondutor[]>();

  const [condutor, setCondutor] = useState<ICondutor>();

  const [filter, setFilter] = useState<number>(0);

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

  const handleDataFilter = useCallback(async () => {
    const { data } = await CondutorDataService.get(filter);
    setRows([data]);
  }, [filter]);

  const handleData = useCallback(async () => {
    getData().then((data) => {
      setRows(data);
    });
  }, []);


  return (
    <TableContainer component={Paper}>
      <TextField
        id="standard-basic"
        label="Pesquisar cliente"
        variant="standard"
        onChange={(e) => setFilter(parseInt(e.target.value))}
      />

      <Button variant="contained" onClick={(e) => handleDataFilter()}>
        Pesquisar
      </Button>
      <Button variant="contained" onClick={(e) => handleData()}>
        Exibir todos
      </Button>
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
              <TableCell align="center">{row.categoriaHabilitacao}</TableCell>
              <TableCell align="center">
                {row.vencimentoHabilitacao.toString().split("T")[0]}
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
      {condutor && (
        <ModalDelete
          condutor={condutor as ICondutor}
          handle={handleDel}
          open={showDel}
        />
      )}
    </TableContainer>
  );
}
