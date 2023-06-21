"use client";

import { useState, ReactElement } from "react";
import axios from "axios";

import SimpleContainer from "../../../components/SimpleContainer";
import Navigation from "../../../components/Navigation";
import NavigationCliente from "../../../components/NavigationCliente";

import Grid from "../../../components/Grid";
// import Button from "../../../components/Button";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";


import ModalNewClient from "../../../components/ModalNewClient";

// import ClienteCard from "../../../components/ClienteCard";

import { IClientes } from "../../../typings/IClientes.d";

// import Box from '@mui/material/Box';
// import Grid from '@mui/material/Grid';

const URL = "https://api-deslocamento.herokuapp.com/api/v1/Cliente";

const Page = async (): Promise<ReactElement> => {
  const [open, setOpen] = useState(false);
  const newModal = () => setOpen(!open);

  const { data } = await axios.get<[IClientes]>(URL);

  return (
    <>

      <SimpleContainer>
        <Navigation />
        <NavigationCliente />
        <Grid data={data} />
      </SimpleContainer>
    </>
  );
};

export default Page;

// { children }: { children: React.ReactElement }
