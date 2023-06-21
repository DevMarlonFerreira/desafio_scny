// "use client";

import { ReactElement } from "react";
import axios from "axios";

import SimpleContainer from "../../../components/SimpleContainer";
import Navigation from "../../../components/Navigation";
import Grid from "../../../components/Grid";
import Button from "../../../components/Button";

// import ClienteCard from "../../../components/ClienteCard";

import { IClientes } from "../../../typings/IClientes.d";

// import Box from '@mui/material/Box';
// import Grid from '@mui/material/Grid';

const URL = "https://api-deslocamento.herokuapp.com/api/v1/Cliente";

const page = async (): Promise<ReactElement> => {
  const { data } = await axios.get<[IClientes]>(URL);

  return (
    <SimpleContainer>
      <Navigation />
      {/* {data.map((cliente: ICliente) => (
        <ClienteCard key={cliente.id} cliente={cliente} />
      ))} */}
      <Button>Novo cliente</Button>
      <Grid data={data} />
    </SimpleContainer>
  );
};

export default page;

// { children }: { children: React.ReactElement }
