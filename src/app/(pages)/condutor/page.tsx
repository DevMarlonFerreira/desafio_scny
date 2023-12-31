import SimpleContainer from "components/SimpleContainer";
import Navigation from "components/Navigation";
import NavigationCondutor from "components/condutor/Navigation";
import Table from "components/condutor/Table";

const Page = () => {
  return (
    <SimpleContainer>
      <Navigation index={1}/>
      <NavigationCondutor />
      <Table />
    </SimpleContainer>
  );
};

export default Page;
