import { Navbar } from "./components/Navbar/Navbar";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import createTheme from "@mui/material/styles/createTheme";
import responsiveFontSizes from "@mui/material/styles/responsiveFontSizes";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Contact } from "./Contact";
import { Footer } from "./components/Footer";
let darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});
darkTheme = responsiveFontSizes(darkTheme);

export const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Navbar />
      <Container maxWidth={false}>
        <About />
        <Skills />
        <Contact />
      </Container>
      <Footer />
    </ThemeProvider>
  );
};
