import SimpleContainer from "components/SimpleContainer";
import Navigation from "components/Navigation";
import Table from "components/weatherforecast/Table";

const Page = () => {
  return (
    <SimpleContainer>
      <Navigation index={4}/>
      <Table />
    </SimpleContainer>
  );
};

export default Page;
