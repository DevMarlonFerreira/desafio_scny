
import { ReactElement } from "react";

import SimpleContainer from "components/SimpleContainer";
import Navigation from "components/Navigation";
import NavigationCliente from "components/cliente/Navigation";
import Table from "components/cliente/Table";

const Page = async (): Promise<ReactElement> => {
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
