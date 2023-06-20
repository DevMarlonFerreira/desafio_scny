"use client";

import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

type ButtonProps = {
    children: React.ReactNode
  }

type Props = {
    children: string | JSX.Element | JSX.Element[]
  }

export default function SimpleContainer({ children }: Props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        { children }
      </Container>
    </React.Fragment>
  );
}