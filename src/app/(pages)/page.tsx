"use client";

import { Typography } from "@mui/material";
import SimpleContainer from "components/SimpleContainer";
import Navigation from "components/Navigation";

const Page = () => {
  return (
    <SimpleContainer>
      <Typography id="title" variant="h4" textAlign="center">
        Desafio de Desenvolvimento Front-End
      </Typography>
      <Typography id="sub-title" variant="h5" textAlign="center">
        Aplicação de Deslocamento
      </Typography>
      <Navigation index={7} />
    </SimpleContainer>
  );
};

export default Page;
