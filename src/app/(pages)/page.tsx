"use client"

import { Typography } from "@mui/material";
import SimpleContainer from "components/SimpleContainer";
import Navigation from "components/Navigation";

const Page = () => {
  return (
    <SimpleContainer>
      <Typography id="title" variant="h1" component="h2">
        Cadastro de veículo
      </Typography>
      <Navigation index={7} />
    </SimpleContainer>
  );
};

export default Page;
