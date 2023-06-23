"use client";

import { ReactElement } from "react";

import ClienteDataService from "../../services/cliente.service";

import SimpleContainer from "../../../components/SimpleContainer";
import Navigation from "../../../components/Navigation";
import NavigationCliente from "../../../components/cliente/Navigation";
import Grid from "../../../components/Grid";

const Page = async (): Promise<ReactElement> => {
  const { data } = await ClienteDataService.getAll();

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
