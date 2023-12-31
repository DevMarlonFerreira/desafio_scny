"use client";

import { useState, useEffect, lazy, useCallback } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Button,
  IconButton,
} from "@mui/material";
import ClienteDataService from "app/services/cliente.service";
import { ICliente } from "typings/ICliente.d";
const ModalEditar = lazy(() => import("./ModalEditar"));
const ModalDelete = lazy(() => import("./ModalDelete"));

export default function BasicTable() {
  const [showPut, setShowPut] = useState(false);
  const [showDel, setShowDel] = useState(false);

  const [rows, setRows] = useState<ICliente[]>();
  const [cliente, setCliente] = useState<ICliente>();
  const [filter, setFilter] = useState<number>(0);

  const handlePut = useCallback(() => setShowPut(!showPut), [showPut]);

  const handleDel = useCallback(() => {
    setShowDel(!showDel);
  }, [showDel]);

  const getData = async () => {
    const { data } = await ClienteDataService.getAll();
    return data;
  };

  const handleDataFilter = useCallback(async () => {
    const { data } = await ClienteDataService.get(filter);
    setRows([data]);
  }, [filter]);

  const handleData = useCallback(async () => {
    getData().then((data) => {
      setRows(data);
    });
  }, []);

  useEffect(() => {
    getData().then((data) => {
      setRows(data);
    });
  }, [handleDel, handlePut]);

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
      <Table sx={{ minWidth: 650 }} size={"small"} aria-label="Tabela cliente">
        <TableHead>
          <TableRow>
            <TableCell align="center">Nome</TableCell>
            <TableCell align="center">Tipo de documento</TableCell>
            <TableCell align="center">Número do documento</TableCell>
            <TableCell align="center">UF</TableCell>
            <TableCell align="center">Cidade</TableCell>
            <TableCell align="center">Bairro</TableCell>
            <TableCell align="center">Logradouro</TableCell>
            <TableCell align="center">Número</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows?.map((row: ICliente, key: number) => (
            <TableRow
              key={key}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.nome}
              </TableCell>
              {/* <TableCell align="center">{row.tipoDocumento}</TableCell> */}
              <TableCell align="center">{row.nome}</TableCell>
              <TableCell align="center">{row.numeroDocumento}</TableCell>
              <TableCell align="center">{row.uf}</TableCell>
              <TableCell align="center">{row.cidade}</TableCell>
              <TableCell align="center">{row.bairro}</TableCell>
              <TableCell align="center">{row.logradouro}</TableCell>
              <TableCell align="center">{row.numero}</TableCell>
              <TableCell align="center">
                {" "}
                <IconButton
                  size="small"
                  aria-label="editar"
                  onClick={() => {
                    setCliente(row);
                    handlePut();
                  }}
                >
                  Editar
                </IconButton>
              </TableCell>
              <TableCell align="center">
                <IconButton
                  size="small"
                  aria-label="excluir"
                  onClick={() => {
                    setCliente(row);
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
      {cliente && (
        <ModalEditar
          cliente={cliente as ICliente}
          handle={handlePut}
          open={showPut}
        />
      )}
      {cliente && (
        <ModalDelete
          cliente={cliente as ICliente}
          handle={handleDel}
          open={showDel}
        />
      )}
    </TableContainer>
  );
}
