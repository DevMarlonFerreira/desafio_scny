"use client";

import { useState, ReactElement } from "react";
import axios from "axios";

import SimpleContainer from "../../../components/SimpleContainer";
import Navigation from "../../../components/Navigation";
import Grid from "../../../components/Grid";
// import Button from "../../../components/Button";
import Button from "@mui/material/Button";

import NewClient from "../../../components/NewClient";

// import ClienteCard from "../../../components/ClienteCard";

import { IClientes } from "../../../typings/IClientes.d";

// import Box from '@mui/material/Box';
// import Grid from '@mui/material/Grid';

const URL = "https://api-deslocamento.herokuapp.com/api/v1/Cliente";

const Page = async (): Promise<ReactElement> => {
  const [open, setOpen] = useState(false);
  const handleNew = () => setOpen(!open);

  const { data } = await axios.get<[IClientes]>(URL);

  return (
    <>
      <SimpleContainer>
        <Navigation />
        {/* {data.map((cliente: ICliente) => (
        <ClienteCard key={cliente.id} cliente={cliente} />
      ))} */}
        {/* <Button ariaLabel="cadastro de cliente" handle={handleNew}>
          Novo cliente
        </Button> */}
        <Button onClick={handleNew} aria-label="adastro de cliente">
        Novo cliente
        </Button>
        <Grid data={data} />
      </SimpleContainer>
      {/* <NewClient handle={handleNew} open={open} /> */}
    </>
  );
};

export default Page;

// { children }: { children: React.ReactElement }
