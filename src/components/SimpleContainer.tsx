"use client";

import { Fragment } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

type Props = {
    children: string | JSX.Element | JSX.Element[]
  }

export default function SimpleContainer({ children }: Props) {
  return (
    <Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        { children }
      </Container>
    </Fragment>
  );
}