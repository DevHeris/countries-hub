/* eslint-disable react/prop-types */
import CountrySearchFilter from "./CountrySearchFilter";
import Countries from "./Countries";
import CountryDetails from "./CountryDetails";

export default function Main({
  darkMode,
  setSelectedCountry,
  selectedCountry,
  countries,
  setCountries,
  setPage,
  setFoundCountries,
  foundCountries,
  page,
  displayedCountries,
}) {
  return (
    <main>
      {selectedCountry ? (
        <CountryDetails
          selectedCountry={selectedCountry}
          setSelectedCountry={setSelectedCountry}
        />
      ) : (
        <>
          <CountrySearchFilter
            countries={countries}
            setCountries={setCountries}
            setFoundCountries={setFoundCountries}
            setPage={setPage}
          />
          <Countries
            countries={countries}
            setCountries={setCountries}
            foundCountries={foundCountries}
            setPage={setPage}
            page={page}
            darkMode={darkMode}
            setSelectedCountry={setSelectedCountry}
            displayedCountries={displayedCountries}
          />
        </>
      )}
    </main>
  );
}
