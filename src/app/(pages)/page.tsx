import SimpleContainer from "components/SimpleContainer";
import Navigation from "components/Navigation";
import Table from "components/veiculo/Table";

const Page = () => {
  return (
    <SimpleContainer>
      <Navigation index={7} />
      <Table />
    </SimpleContainer>
  );
};

export default Page;
