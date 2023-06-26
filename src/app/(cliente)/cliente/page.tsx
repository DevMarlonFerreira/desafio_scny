
import { ReactElement, useEffect, useState } from "react";

import ClienteDataService from "app/services/cliente.service";

import SimpleContainer from "components/SimpleContainer";
import Navigation from "components/Navigation";
import NavigationCliente from "components/cliente/Navigation";
import Grid from "components/Grid";
import Table from "components/cliente/Table";
import { ICliente } from "typings/ICliente.d";

const Page = async (): Promise<ReactElement> => {
  // const [clientes, setClientes] = useState<ICliente[]>();

  // const { data } = await ClienteDataService.getAll();

  const getData = async () => {
    const { data } = await ClienteDataService.getAll();
    return data;
  };

  // useEffect(() => {
  //   getData()
  //     .then((data) => {
  //       setClientes(data);
  //     })
  //     .catch((message) => {
  //       // console.log(message);
  //     });
  // }, []);

  // useEffect(() => {
  // }, [clientes]);

  return (
    <SimpleContainer>
      <Navigation />
      <NavigationCliente />
      <Table data={null} />
    </SimpleContainer>
  );
};

export default Page;

// { children }: { children: React.ReactElement }
