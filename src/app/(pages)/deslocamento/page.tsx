
import { ReactElement } from "react";

import SimpleContainer from "components/SimpleContainer";
import Navigation from "components/Navigation";
import NavigationDeslocamento from "components/deslocamento/Navigation";
import Table from "components/deslocamento/Table";

const Page = async (): Promise<ReactElement> => {
  return (
    <SimpleContainer>
      <Navigation />
      <NavigationDeslocamento />
      <Table />
    </SimpleContainer>
  );
};

export default Page;

// { children }: { children: React.ReactElement }
