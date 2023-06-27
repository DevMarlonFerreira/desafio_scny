
import { ReactElement } from "react";

import SimpleContainer from "components/SimpleContainer";
import Navigation from "components/Navigation";
// import DeslocamentoVeiculo from "components/deslocamento/Navigation";
import Table from "components/deslocamento/Table";

const Page = async (): Promise<ReactElement> => {
  return (
    <SimpleContainer>
      <Navigation />
      {/* <NavigationVeiculo /> */}
      <Table />
    </SimpleContainer>
  );
};

export default Page;

// { children }: { children: React.ReactElement }
