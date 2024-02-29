import Catalog from "../../features/catalog/Catalog";
import {
  Container,
  CssBaseline,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import Header from "./Header";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const palleteType = darkMode ? "dark" : "light";
  const theme = createTheme({
    palette: {
      mode: palleteType,
      background:{
        default: (palleteType === 'light') ? '#eaeaea' : '#121212'
      }
    },
  });

  function handleThemeChang(){
    setDarkMode(!darkMode);
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline></CssBaseline>
      <Header darkMode={darkMode} handleThemeChange={handleThemeChang} />
      <Container>
        <Catalog />
      </Container>
    </ThemeProvider>
  );
}

export default App;
