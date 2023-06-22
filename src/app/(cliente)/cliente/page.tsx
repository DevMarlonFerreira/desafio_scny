"use client";

import { ReactElement } from "react";
import axios from "axios";

import SimpleContainer from "../../../components/SimpleContainer";
import Navigation from "../../../components/Navigation";
import NavigationCliente from "../../../components/NavigationCliente";
import Grid from "../../../components/Grid";
import { IClientes } from "../../../typings/IClientes.d";

const Page = async (): Promise<ReactElement> => {
  const { data } = await axios.get<[IClientes]>(process.env.URL_CLIENTE as string);

  return (
    <SimpleContainer>
      <Navigation />
      <NavigationCliente />
      <Grid data={data} />
    </SimpleContainer>
  );
};

export default Page;

// { children }: { children: React.ReactElement }
