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
import VeiculoDataService from "app/services/veiculo.service";
import { IVeiculo } from "typings/IVeiculo.d";
const ModalEditar = lazy(() => import("./ModalEditar"));
const ModalDelete = lazy(() => import("./ModalDelete"));

export default function BasicTable() {
  const [showPut, setShowPut] = useState(false);
  const [showDel, setShowDel] = useState(false);

  const [rows, setRows] = useState<IVeiculo[]>();

  const [veiculo, setVeiculo] = useState<IVeiculo>();

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

  return (
    <TableContainer component={Paper}>
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
              <TableCell align="center">{row.marcaModelo}</TableCell>
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
                  <FavoriteIcon />
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
                  <FavoriteIcon />
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
