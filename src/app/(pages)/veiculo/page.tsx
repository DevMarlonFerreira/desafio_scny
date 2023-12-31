import SimpleContainer from "components/SimpleContainer";
import Navigation from "components/Navigation";
import NavigationVeiculo from "components/veiculo/Navigation";
import Table from "components/veiculo/Table";

const Page = () => {
  return (
    <SimpleContainer>
      <Navigation index={3}/>
      <NavigationVeiculo />
      <Table />
    </SimpleContainer>
  );
};

export default Page;
