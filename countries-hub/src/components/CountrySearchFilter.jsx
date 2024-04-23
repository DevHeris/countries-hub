/* eslint-disable react/prop-types */
import { useState } from "react";
import { Search as SearchIcon } from "@mui/icons-material";

export default function CountrySearchFilter({
  countries,
  setFoundCountries,
  setPage,
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [showDropDown, setShowDropDown] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState("All");

  const regions = ["All", "Africa", "Americas", "Asia", "Europe", "Oceania"];

  const dropDownHandler = () =>
    setShowDropDown((showDropDown) => !showDropDown);

  const searchHandler = (input) => {
    const match = countries.filter((country) =>
      country.name.toLowerCase().includes(input.toLowerCase())
    );

    setFoundCountries(match);
    setPage(1);
  };

  const regionFilterHandler = (selectedRegion) => {
    setSelectedRegion(selectedRegion);
    const match =
      selectedRegion === "All"
        ? countries
        : countries.filter((country) => country.region === selectedRegion);

    setFoundCountries(match);
    dropDownHandler();
  };

  return (
    <div className="country-search-filter">
      <div className="search">
        <input
          className="search-input"
          type="text"
          placeholder="Search for a country..."
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            searchHandler(e.target.value);
          }}
        />
        <SearchIcon
          style={{
            position: "absolute",
            top: "50%",
            left: "10px",
            transform: "translateY(-50%)",
            pointerEvents: "none",
            color: "hsl(0, 0%, 98%)",
          }}
        />
      </div>

      <div className="filter">
        <div className="btn-wrapper">
          <button className="filter-btn" onClick={dropDownHandler}>
            <span> Filter by {selectedRegion}</span>
            <span>&#9660;</span>
          </button>
        </div>
        {showDropDown && (
          <ul className="filter-values">
            {regions.map((region) => (
              <li key={region} onClick={() => regionFilterHandler(region)}>
                {region}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
