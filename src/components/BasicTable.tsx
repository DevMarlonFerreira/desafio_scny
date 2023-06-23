import { useState, useEffect, lazy } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { ICliente } from "typings/ICliente.d";
import { IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
const ModalEditarCliente = lazy(() => import("./cliente/ModalEditar"));

export default function BasicTable({
  heads,
  rows,
}: {
  heads: Array<string>;
  rows: ICliente[];
}) {
  const [openPut, setPut] = useState(false);
  const [cliente, setCliente] = useState<ICliente>();

  const showPut = () => {
    setPut(!openPut);
  };

  const handlePut = (row: ICliente) => {
    setCliente(row);
    showPut();
  };

  useEffect(() => {

  }, [cliente])

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {heads.map((head: string, key: number) => (
              <TableCell align="center" key={key}>
                {" "}
                {head}{" "}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row: ICliente, key: number) => (
            <TableRow
              key={key}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.nome}
              </TableCell>
              <TableCell align="center">{row.tipoDocumento}</TableCell>
              <TableCell align="center">{row.numeroDocumento}</TableCell>
              <TableCell align="center">{row.uf}</TableCell>
              <TableCell align="center">{row.cidade}</TableCell>
              <TableCell align="center">{row.bairro}</TableCell>
              <TableCell align="center">{row.logradouro}</TableCell>
              <TableCell align="center">{row.numero}</TableCell>
              <TableCell align="center">
                {" "}
                <IconButton
                  aria-label="editar"
                  onClick={(e) => {
                    handlePut(row);
                  }}
                >
                  Editar
                  <FavoriteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {cliente && (
          <ModalEditarCliente
            cliente={cliente as ICliente}
            handle={showPut}
            open={openPut}
          />
      )}
    </TableContainer>
  );
}
