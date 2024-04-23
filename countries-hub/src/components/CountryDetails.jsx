import { useEffect } from "react";

/* eslint-disable react/prop-types */
export default function CountryDetails({
  selectedCountry,
  setSelectedCountry,
}) {
  useEffect(() => {
    document.title = selectedCountry.name;

    return () => (document.title = "Countries");
  }, [selectedCountry]);

  return (
    <section className="country-details">
      <button
        className="back-btn"
        onClick={() => {
          setSelectedCountry(null);
        }}
      >
        <span> &larr;</span>
        <span>Back</span>
      </button>
      <div className="main-info">
        <div className="details-img-wrapper">
          <img src={selectedCountry.flags.svg} alt={selectedCountry.name} />
        </div>
        <section className="text-wrapper">
          <h3>{selectedCountry.name}</h3>
          <div>
            <div>
              <p>
                <span>Native Name: </span>
                {selectedCountry.nativeName}
              </p>
              <p>
                <span>Population: </span>
                {selectedCountry.population.toLocaleString()}
              </p>
              <p>
                <span>Region: </span>
                {selectedCountry.region}
              </p>
              <p>
                <span>Sub Region: </span>
                {selectedCountry.subregion}
              </p>
              <p>
                <span>Capital: </span>
                {selectedCountry.capital}
              </p>
            </div>
            <div>
              <p>
                <span>Top Level Domain: </span>
                {selectedCountry.topLevelDomain[0]}
              </p>
              <p>
                <span>Currencies: </span>
                {selectedCountry.currencies.map((currency) => currency.name)}
              </p>
              <p>
                <span>Languages: </span>
                {selectedCountry.languages?.map((language, index) => (
                  <em key={index}>
                    {language.name}
                    {index !== selectedCountry.languages.length - 1 ? ", " : ""}
                  </em>
                ))}
              </p>
            </div>
          </div>
        </section>{" "}
        {selectedCountry.borders && (
          <p className="border">
            <span>Border Countries:</span>
            {selectedCountry.borders?.map((country, i) => (
              <em key={i}>{country}</em>
            ))}
          </p>
        )}
      </div>
    </section>
  );
}
