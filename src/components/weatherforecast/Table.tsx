"use client";

import { useState, useEffect } from "react";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import WeatherForecast from "app/services/weatherforecast.service";
import { IWeatherforecast } from "typings/IWeatherforecast.d";

export default function BasicTable() {
  const [rows, setRows] = useState<IWeatherforecast[]>();

  const getData = async () => {
    const { data } = await WeatherForecast.getAll();
    return data;
  };

  useEffect(() => {
    getData()
      .then((data) => {
        setRows(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="Tabela Weatherforecast">
        <TableHead>
          <TableRow>
            <TableCell align="center">Data</TableCell>
            <TableCell align="center">Celsius</TableCell>
            <TableCell align="center">Fahrenheit</TableCell>
            <TableCell align="center">Resumo</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows?.map((row: IWeatherforecast, key: number) => (
            <TableRow
              key={key}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.date.toString().split("T")[0]}
              </TableCell>
              <TableCell align="center">{row.temperatureC}</TableCell>
              <TableCell align="center">{row.temperatureF}</TableCell>
              <TableCell align="center">{row.summary}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
