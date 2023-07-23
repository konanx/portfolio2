import { Box, Button, Typography } from "@mui/material";
import about from "../assets/about.svg";
import { DownloadCircle } from "iconoir-react";
import cv from "../assets/cv Michał Pudełko.pdf";
export const About = () => {
  return (
    <Box
      id=""
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        mt: 8,
      }}
    >
      <Typography
        variant="h4"
        fontFamily="Oswald"
        textAlign="center"
      >
        CZEŚĆ, JESTEM MICHAŁ
      </Typography>
      <Typography
        variant="subtitle2"
        // fontFamily="Oswald"
        textAlign="center"
      >
        Full-Stack Developer z doświadczeniem komercyjnym
      </Typography>
      <Button
        href={cv}
        download
        id="cv"
        sx={{ mt: 2 }}
        variant="outlined"
        startIcon={<DownloadCircle />}
      >
        Pobierz CV
      </Button>
      <Box sx={{ mt: 8, maxWidth: "600px" }}>
        <img
          src={about}
          loading="lazy"
          className="img-fluid"
        />
      </Box>
    </Box>
  );
};
