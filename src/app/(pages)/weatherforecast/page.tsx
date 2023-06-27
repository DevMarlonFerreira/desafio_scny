
import { ReactElement } from "react";

import SimpleContainer from "components/SimpleContainer";
import Navigation from "components/Navigation";
import Table from "components/weatherforecast/Table";

const Page = async (): Promise<ReactElement> => {
  return (
    <SimpleContainer>
      <Navigation />
      <Table />
    </SimpleContainer>
  );
};

export default Page;

// { children }: { children: React.ReactElement }
