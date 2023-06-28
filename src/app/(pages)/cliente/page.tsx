import SimpleContainer from "components/SimpleContainer";
import Navigation from "components/Navigation";
import NavigationCliente from "components/cliente/Navigation";
import Table from "components/cliente/Table";

const Page = () => {
  return (
    <SimpleContainer>
      <Navigation index={0}/>
      <NavigationCliente />
      <Table />
    </SimpleContainer>
  );
};

export default Page;
