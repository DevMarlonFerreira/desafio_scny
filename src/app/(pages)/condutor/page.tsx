
import { ReactElement } from "react";

import SimpleContainer from "components/SimpleContainer";
import Navigation from "components/Navigation";
import NavigationCliente from "components/cliente/Navigation";
import Table from "components/condutor/Table";

const Page = async (): Promise<ReactElement> => {
  return (
    <SimpleContainer>
      <Navigation />
      {/* <NavigationCliente /> */}
      <Table />
    </SimpleContainer>
  );
};

export default Page;

// { children }: { children: React.ReactElement }
