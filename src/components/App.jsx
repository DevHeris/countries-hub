/* eslint-disable react/prop-types */
import useMediaQuery from "@mui/material/useMediaQuery";
import MaterialUISwitch from "./MaterialUISwitch";
import { useEffect, useState } from "react";
import Header from "./Header";
import Main from "./Main";
import { ThemeProvider } from "@emotion/react";
import { Pagination } from "@mui/material";
import { createTheme } from "@mui/material/styles";

export default function App() {
  const [countries, setCountries] = useState([]);
  const [foundCountries, setFoundCountries] = useState(null);
  const [page, setPage] = useState(1);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [displayedCountries, setDisplayedCountries] = useState([]);
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [darkMode, setDarkMode] = useState(prefersDarkMode);
  const countriesPerPage = 8;
  const totalCountries =
    foundCountries === null ? countries.length : foundCountries.length;
  const pageCount = Math.ceil(totalCountries / countriesPerPage);

  const theme = createTheme({
    palette: {
      primary: {
        main: "#173052",
      },
    },
    components: {
      MuiPaginationItem: {
        styleOverrides: {
          root: {
            color: darkMode ? "#fff" : "hsl(208, 23%, 22%)",
            "&.Mui-selected": {
              color: "#2fff",
            },
          },
        },
      },
      MuiPagination: {
        styleOverrides: {
          root: {
            backgroundColor: darkMode
              ? " hsl(208, 23%, 22%)"
              : "hsl(0, 0%, 98%) ",
            padding: ".4em",
            position: "fixed",
            bottom: "0",
            width: "100%",
          },
        },
      },
    },
  });

  useEffect(() => {
    if (countries) {
      const startIndex = (page - 1) * countriesPerPage;
      const endIndex = Math.min(startIndex + countriesPerPage, totalCountries);
      const pageCountries =
        foundCountries === null
          ? countries.slice(startIndex, endIndex)
          : foundCountries.slice(startIndex, endIndex);

      setDisplayedCountries(pageCountries);
    }
  }, [countries, page, totalCountries, foundCountries]);

  useEffect(() => {
    document.getElementById("switcher-id").href = darkMode
      ? "/themes/dark.css"
      : "/themes/light.css";
  }, [darkMode]);

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <Header>
        <span> {darkMode ? "Dark" : "Light"} Mode</span>
        <MaterialUISwitch checked={darkMode} onChange={handleDarkModeToggle} />
      </Header>
      <Main
        darkMode={darkMode}
        selectedCountry={selectedCountry}
        countries={countries}
        setCountries={setCountries}
        setPage={setPage}
        setFoundCountries={setFoundCountries}
        foundCountries={foundCountries}
        page={page}
        setSelectedCountry={setSelectedCountry}
        displayedCountries={displayedCountries}
      />
      {!selectedCountry && (
        <ThemeProvider theme={theme}>
          <Pagination
            count={pageCount}
            page={page}
            onChange={(e, value) => setPage(value)}
            color="primary"
            size="large"
          />
        </ThemeProvider>
      )}
    </>
  );
}
