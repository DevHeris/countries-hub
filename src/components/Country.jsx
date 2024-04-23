/* eslint-disable react/prop-types */
export default function Country({ country, setSelectedCountry }) {
  return (
    <li className="country" onClick={() => setSelectedCountry(country)}>
      <div className="img-wrapper">
        <img src={country.flags.png} alt={country.name} />
      </div>
      <div className="short-info">
        <h3>{country.name}</h3>
        <p>
          <span>Poluation: </span>
          {country.population.toLocaleString()}
        </p>
        <p>
          <span>Region: </span>
          {country.region}
        </p>
        <p>
          <span>Capital: </span>
          {country.capital}
        </p>
      </div>
    </li>
  );
}
