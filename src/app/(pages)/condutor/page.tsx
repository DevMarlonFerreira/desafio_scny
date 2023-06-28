import { ReactElement } from "react";

import SimpleContainer from "components/SimpleContainer";
import Navigation from "components/Navigation";
import NavigationCondutor from "components/condutor/Navigation";
import Table from "components/condutor/Table";

const Page = async (): Promise<ReactElement> => {
  return (
    <SimpleContainer>
      <Navigation index={1}/>
      <NavigationCondutor />
      <Table />
    </SimpleContainer>
  );
};

export default Page;
