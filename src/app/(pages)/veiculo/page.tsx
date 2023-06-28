import { ReactElement } from "react";

import SimpleContainer from "components/SimpleContainer";
import Navigation from "components/Navigation";
import NavigationVeiculo from "components/veiculo/Navigation";
import Table from "components/veiculo/Table";

const Page = async (): Promise<ReactElement> => {
  return (
    <SimpleContainer>
      <Navigation />
      <NavigationVeiculo />
      <Table />
    </SimpleContainer>
  );
};

export default Page;
