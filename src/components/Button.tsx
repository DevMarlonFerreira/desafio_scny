// "use client";

import Button from '@mui/material/Button';

type Props = {
    children: string | JSX.Element | JSX.Element[],
    handle: () => void,
    ariaLabel: string
  }

export default function Btn({ children, handle, ariaLabel }: Props) {
  return (
    <Button onClick={handle} aria-label={ariaLabel}>
        { children }
    </Button>
  );
}