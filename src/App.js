import React, { useEffect, useState } from 'react';
import './App.css';
import {
  MenuItem,
  FormControl,
  Select,
  responsiveFontSizes,
} from "@material-ui/core";

function App() {
  const [countries, setCountries] = useState([]);

  // STATE = how to write a variable in react <<<<<<<<<<

  // https://disease.sh/v3/covid-19/countries

  // USEEFFECT = Runs a piece of code
  // based on a given condition

  useEffect(() => {
    // the code inside here will run once 
    // when the component loads and not again

    // async -> send a request, wait for it, do something with the info

    const getCountriesData = async () => {
       await fetch("https://disease.sh/v3/covid-19/countries")
       .then((Response) => Response.json())
       .then((data) => {
         const countries = data.map((country) => (
           {
             name: country.country,
             value: country.countryInfo.iso2
           }));

           setCountries(countries);
       })
    };

    getCountriesData();
  }, []);
  return (
    <div className="app">

      <div className="app__header">
        <h1>COVID 19 Tracker</h1>
        <FormControl className="app__dropdown">
          <Select variant="outlined" value="abc">
            {/* Loop through all the 
                countries and show a 
                drop down list of contries*/}

            {
              countries.map(country => (
                <MenuItem value={country.value}>{country.name}</MenuItem>
              ))}
            

            {/*<MenuItem value="worldwide">Worldwide</MenuItem>
            <MenuItem value="worldwide">Option 2</MenuItem>
            <MenuItem value="worldwide">Option 3</MenuItem>
            <MenuItem value="worldwide">Option 4</MenuItem>*/}

          </Select>
        </FormControl>
      </div>

      {/* Header*/}
      {/* Title + Select Input dropdown field*/}

      {/* Info Boxes */}
      {/* Info Boxes */}
      {/* Info Boxes */}

      {/* Tables */}

      {/* Map */}
    </div>
  );
}

export default App;
