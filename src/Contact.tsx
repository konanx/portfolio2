import React from "react";
import { Stack, Paper, Link, Tooltip, Typography } from "@mui/material";
import { GitHub, LinkedIn, SendMail, PhoneOutcome } from "iconoir-react";
const SingleContactItem = ({ ...props }) => {
  return (
    <Paper
      elevation={2}
      sx={{ p: 2 }}
    >
      <Link
        href={props?.link}
        {...props}
      >
        {props?.icon}
      </Link>
    </Paper>
  );
};

export const Contact = () => {
  const contacts = [
    { link: "https://github.com/konanx", icon: <GitHub />, target: "_blank" },
    {
      link: "https://www.linkedin.com/in/micha%C5%82-pude%C5%82ko-340704229/ ",
      icon: <LinkedIn />,
      target: "_blank",
    },
    {
      link: "mailto:mpudelko@onet.pl",
      icon: <SendMail />,
    },
    {
      link: "tel:507619714",
      icon: <PhoneOutcome />,
    },
  ];
  return (
    <>
      <Typography
        id="contact"
        variant="h4"
        mt={8}
        mb={2}
        fontFamily="Montserrat"
        textAlign="center"
      >
        Kontakt
      </Typography>
      <Stack
        spacing={2}
        direction={{ xs: "row" }}
        alignItems="center"
        justifyContent="center"
        // sx={{ mt: 6 }}
      >
        {contacts.map((contact) => (
          <SingleContactItem {...contact} />
        ))}
      </Stack>
    </>
  );
};
