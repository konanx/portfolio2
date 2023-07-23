import React from "react";
import {
  Container,
  Divider,
  Stack,
  Box,
  Typography,
  Link,
} from "@mui/material";

export const MobileMenuItem = (props: any) => {
  return (
    <Box>
      <Divider />
      <Container
        maxWidth="xl"
        sx={{ py: 1.5 }}
      >
        {/* <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          justifyContent="center"
        > */}
        <Link
          href={props?.id}
          underline="none"
          color="inherit"
          onClick={() => {
            props.setMobileMenuOpen(false);
            //     setTimeout(() => {
            //       scrollToElement(props.id);
            //     }, 500);
          }}
        >
          <Typography variant="h5">{props?.name}</Typography>
        </Link>
        {/* </Stack> */}
      </Container>
    </Box>
  );
};
