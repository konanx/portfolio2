import { useState } from "react";
import {
  Container,
  Stack,
  AppBar,
  Toolbar,
  IconButton,
  Collapse,
  Link,
  Typography,
} from "@mui/material";
import logo from "../../assets/logo.svg";
import MenuIcon from "@mui/icons-material/Menu";
import useMediaQuery from "@mui/material/useMediaQuery";
import { MobileMenuItem } from "./MobileMenuItem";
export const Navbar = () => {
  const [mobileMenuOpen, setmobileMenuOpen] = useState(false);
  const menuItems = [
    { name: "O mnie", id: "#" },
    { name: "CV", id: "#" },
    { name: "Umiejętności", id: "#cv" },
    { name: "Kontakt", id: "#contact" },
  ];
  const matches = useMediaQuery("(min-width:1400px)");
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Container maxWidth="xl">
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <IconButton href="/#">
              <img
                src={logo}
                loading="lazy"
                height={"30 rem"}
              />
            </IconButton>
            {matches ? (
              <Stack
                direction="row"
                spacing={3}
              >
                {menuItems.map((item) => (
                  <Link
                    href={item?.id}
                    underline="none"
                    color="inherit"
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        cursor: "pointer",
                        "&:hover": {
                          opacity: 0.8,
                        },
                      }}
                    >
                      {item.name}
                    </Typography>
                  </Link>
                ))}
              </Stack>
            ) : (
              <IconButton onClick={() => setmobileMenuOpen((prev) => !prev)}>
                <MenuIcon />
              </IconButton>
            )}
          </Stack>
        </Container>
      </Toolbar>
      {!matches && (
        <Collapse
          in={mobileMenuOpen}
          timeout={350}
          collapsedSize={0}
        >
          {menuItems.map((menuItem, i) => (
            <MobileMenuItem
              setMobileMenuOpen={setmobileMenuOpen}
              key={i}
              {...menuItem}
            />
          ))}
        </Collapse>
      )}
    </AppBar>
  );
};
