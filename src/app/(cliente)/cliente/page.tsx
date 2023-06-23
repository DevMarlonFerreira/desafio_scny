"use client";

import { ReactElement } from "react";

import ClienteDataService from "app/services/cliente.service";

import SimpleContainer from "components/SimpleContainer";
import Navigation from "components/Navigation";
import NavigationCliente from "components/cliente/Navigation";
import Grid from "components/Grid";
import BasicTable from "components/BasicTable";

const Page = async (): Promise<ReactElement> => {
  const { data } = await ClienteDataService.getAll();

  const headTable = [
    "Nome", "Tipo de documento", "Número do documento", "UF", "Cidade", "Bairro", "Logradouro", "Número"
  ]

  return (
    <SimpleContainer>
      <Navigation />
      <NavigationCliente />
      {/* <Grid data={data} /> */}
      <BasicTable heads={headTable} rows={data}/>
    </SimpleContainer>
  );
};

export default Page;

// { children }: { children: React.ReactElement }
