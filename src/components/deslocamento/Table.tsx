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
import DeslocamentoDataService from "app/services/deslocamento.service";
import { IDeslocamento } from "typings/IDeslocamento.d";
const ModalEditar = lazy(() => import("./ModalEditar"));
// const ModalDelete = lazy(() => import("./ModalDelete"));

export default function BasicTable() {
  const [showPut, setShowPut] = useState(false);
  const [showDel, setShowDel] = useState(false);

  const [rows, setRows] = useState<IDeslocamento[]>();

  const [deslocamento, setDeslocamento] = useState<IDeslocamento>();

  const handlePut = useCallback(() => setShowPut(!showPut), [showPut]);

  const handleDel = useCallback(() => {
    setShowDel(!showDel);
  }, [showDel]);

  const getData = async () => {
    const { data } = await DeslocamentoDataService.getAll();
    console.log(data);
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
            <TableCell align="center">Quilometro inicial</TableCell>
            <TableCell align="center">Quilometro final</TableCell>
            <TableCell align="center">Início do deslocamento</TableCell>
            <TableCell align="center">Fim do deslocamento</TableCell>
            <TableCell align="center">Check List</TableCell>
            <TableCell align="center">Motivo</TableCell>
            <TableCell align="center">Observação</TableCell>
            <TableCell align="center">Condutor</TableCell>
            <TableCell align="center">Veículo</TableCell>
            <TableCell align="center">Cliente</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows?.map((row: IDeslocamento, key: number) => (
            <TableRow
              key={key}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.kmInicial}
              </TableCell>
              <TableCell align="center">{row.kmFinal}</TableCell>
              <TableCell align="center">
                {row.inicioDeslocamento?.toString().split("T")[0]}
              </TableCell>
              <TableCell align="center">
                {row.fimDeslocamento?.toString().split("T")[0]}
              </TableCell>
              <TableCell align="center">{row.checkList}</TableCell>
              <TableCell align="center">{row.motivo}</TableCell>
              <TableCell align="center">{row.observacao}</TableCell>
              <TableCell align="center">{row.idCondutor}</TableCell>
              <TableCell align="center">{row.idVeiculo}</TableCell>
              <TableCell align="center">{row.idCliente}</TableCell>

              <TableCell align="center">
                {" "}
                <IconButton
                  aria-label="editar"
                  onClick={() => {
                    setDeslocamento(row);
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
                    setDeslocamento(row);
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
      {deslocamento && (
        <ModalEditar
          deslocamento={deslocamento as IDeslocamento}
          handle={handlePut}
          open={showPut}
        />
      )}
      {/* {veiculo && (
        <ModalDelete
          veiculo={veiculo as IVeiculo}
          handle={handleDel}
          open={showDel}
        />
      )} */}
    </TableContainer>
  );
}
