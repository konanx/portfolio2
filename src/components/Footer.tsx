import { Paper, Typography } from "@mui/material";
export const Footer = () => {
  return (
    <Paper
      elevation={3}
      sx={{ p: 2, mt: 6 }}
    >
      <Typography
        variant="h5"
        textAlign="center"
      >
        Copyright 2023 @ Michał Pudełko
      </Typography>
    </Paper>
  );
};
