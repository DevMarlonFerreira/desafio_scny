// "use client";

import { ReactElement } from "react";
import axios from "axios";

import Grid from "../../../components/Grid";
// import ClienteCard from "../../../components/ClienteCard";

import { IClientes } from "../../../typings/IClientes.d";

// import Box from '@mui/material/Box';
// import Grid from '@mui/material/Grid';

const URL = "https://api-deslocamento.herokuapp.com/api/v1/Cliente";

const page = async (): Promise<ReactElement> => {
  const { data } = await axios.get<[IClientes]>(URL);

  return (
    <div>
      {/* {data.map((cliente: ICliente) => (
        <ClienteCard key={cliente.id} cliente={cliente} />
      ))} */}
      <Grid data={data} />
    </div>
  );
};

export default page;

// { children }: { children: React.ReactElement }
