import SimpleContainer from "components/SimpleContainer";
import Navigation from "components/Navigation";
import NavigationDeslocamento from "components/deslocamento/Navigation";
import Table from "components/deslocamento/Table";

const Page = () => {
  return (
    <SimpleContainer>
      <Navigation index={2}/>
      <NavigationDeslocamento />
      <Table />
    </SimpleContainer>
  );
};

export default Page;
