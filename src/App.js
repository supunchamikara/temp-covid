import React from "react";
import "./App.css";
import { Cards, Chart, CountryPicker } from "./components";
import { fetchData } from "./apis";

class App extends React.Component {
  state = {
    data: [],
    country: "",
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
  };

  render() {
    const { data, country } = this.state;
    return (
      <div className="main-container">
         <div class="ui fitted divider"></div>
         <div class="ui fitted divider"></div>
        <span className="ui teal tag label massive">CoViD - 19 [ OUTBREAK ]</span>
        <div class="ui fitted divider"></div>
        <div class="ui fitted divider"></div>
        <div class="ui fitted divider"></div>
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
