"use client";

import { styled } from "@mui/material/styles";
import { Box, Paper, Grid } from "@mui/material";
import ClienteCard from "./ClienteCard";

const Item: any = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function BasicGrid({ data }: { data: Object[] }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={0} justifyContent="space-between">
        {data.map((item: any, key: number) => (
          <Grid key={key}>
            <Item>
              <ClienteCard cliente={item} />
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
