"use client";

import { Fragment, ReactChild, ReactFragment, ReactPortal } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

type Props = {
    children:  ReactChild | ReactFragment | ReactPortal | boolean | null | undefined | string | JSX.Element | JSX.Element[];
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