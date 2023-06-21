"use client";

import * as React from 'react';
import Button from '@mui/material/Button';

type Props = {
    children: string | JSX.Element | JSX.Element[]
  }

export default function Btn({ children }: Props) {
  return (
    <Button>
        { children }
    </Button>
  );
}