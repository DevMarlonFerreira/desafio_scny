"use client";

import * as React from 'react';
import FormControl from '@mui/material/FormControl';

type Props = {
    children: string | JSX.Element | JSX.Element[]
  }

export default function Form({ children }: Props) {
  return (
    <FormControl>
        { children }
    </FormControl>
  );
}