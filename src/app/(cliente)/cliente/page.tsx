// "use client";

import { ReactElement } from "react";
import axios from "axios";

import Grid from "../../../components/Grid";
import ClienteCard from "../../../components/ClienteCard";

import { IClientes } from "../../../typings/IClientes.d";
import { ICliente } from "../../../typings/ICliente.d";

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';


const page = async (): Promise<ReactElement> => {
  const { data } = await axios.get<IClientes>(
    "https://api-deslocamento.herokuapp.com/api/v1/Cliente"
  );

  return (
    <div>
      {/* {data.map((cliente: ICliente) => (
        <ClienteCard key={cliente.id} cliente={cliente} />
      ))} */}
      <Grid />
    </div>
  );
};

export default page;

// { children }: { children: React.ReactElement }