import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/global";
import theme from "./styles/theme";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import { Container } from "./pages/Home/styles";
import Header from "./components/Header";
import Footer from "./components/Footer";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Container>
          <Header />
          <Routes />
          <Footer />
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
