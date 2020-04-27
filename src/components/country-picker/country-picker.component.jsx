import React, { useState, useEffect } from "react";
import "./country-picker.component";
import { fetchCountries } from "../../apis";

const CountryPicker = ({ handleCountryChange }) => {
  const [fetchedCountries, setFetchedCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedCountries(await fetchCountries());
    };
    fetchAPI();
  }, [setFetchedCountries]);
  return (
    <div>
      <div class="ui divider"></div>
      <select class="ui dropdown" onChange={(e) => handleCountryChange(e.target.value)}>
        <option value="">Global</option>
        {fetchedCountries.map((country, i) => (
          <option key={i} value={country}>
            {country}
          </option>
        ))}
      </select>
     
    </div>
  );
};

export default CountryPicker;
