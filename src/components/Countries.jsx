/* eslint-disable react/prop-types */
import Country from "./Country";
import { useEffect } from "react";

export default function Countries({
  setCountries,
  setSelectedCountry,
  displayedCountries,
}) {
  useEffect(() => {
    async function getCountries() {
      const resp = await fetch("/data.json");

      const data = await resp.json();

      setCountries(data);
    }
    getCountries();
  }, [setCountries]);

  return (
    <>
      <section className="countries">
        <ul>
          {displayedCountries?.map((country) => (
            <Country
              key={country.name}
              country={country}
              setSelectedCountry={setSelectedCountry}
            />
          ))}
        </ul>
      </section>
    </>
  );
}
