"use client";

import { useState, useEffect, lazy, useCallback } from "react";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, TextField, Button} from "@mui/material";
import VeiculoDataService from "app/services/veiculo.service";
import { IVeiculo } from "typings/IVeiculo.d";
const ModalEditar = lazy(() => import("./ModalEditar"));
const ModalDelete = lazy(() => import("./ModalDelete"));

export default function BasicTable() {
  const [showPut, setShowPut] = useState(false);
  const [showDel, setShowDel] = useState(false);

  const [rows, setRows] = useState<IVeiculo[]>();
  const [veiculo, setVeiculo] = useState<IVeiculo>();
  const [filter, setFilter] = useState<number>(0);

  const handlePut = useCallback(() => setShowPut(!showPut), [showPut]);

  const handleDel = useCallback(() => {
    setShowDel(!showDel);
  }, [showDel]);

  const getData = async () => {
    const { data } = await VeiculoDataService.getAll();
    return data;
  };

  useEffect(() => {
    getData().then((data) => {
      setRows(data);
    });
  }, [handleDel, handlePut]);

  const handleDataFilter = useCallback(async () => {
    const { data } = await VeiculoDataService.get(filter);
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
        label="Pesquisar veículo"
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
            <TableCell align="center">Placa</TableCell>
            <TableCell align="center">Modelo</TableCell>
            <TableCell align="center">Ano de fabricação</TableCell>
            <TableCell align="center">Quilometragem </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows?.map((row: IVeiculo, key: number) => (
            <TableRow
              key={key}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.placa}
              </TableCell>
              <TableCell align="center">{row.id}</TableCell>
              <TableCell align="center">{row.anoFabricacao}</TableCell>
              <TableCell align="center">{row.kmAtual}</TableCell>
              <TableCell align="center">
                {" "}
                <IconButton
                  aria-label="editar"
                  onClick={() => {
                    setVeiculo(row);
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
                    setVeiculo(row);
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
      {veiculo && (
        <ModalEditar
          veiculo={veiculo as IVeiculo}
          handle={handlePut}
          open={showPut}
        />
      )}
      {veiculo && (
        <ModalDelete
          veiculo={veiculo as IVeiculo}
          handle={handleDel}
          open={showDel}
        />
      )}
    </TableContainer>
  );
}
