import React from "react";

class Weather extends React.Component {
  constructor() {
    super();
    this.state = { weather: {} };
    this.getWeather = this.getWeather.bind(this);
  }
  componentDidMount() {
    navigator.geolocation.getCurrentPosition((pos) => {
      this.getWeather(pos);
    });
  }

  getWeather(pos) {
    let XHP = new XMLHttpRequest();
    XHP.open(
      "GET",
      `http://api.openweathermap.org/data/2.5/weather?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&appid=4de939d93b9766836f3885ee8cbdfb9a`,
      true
    );

    XHP.onload = (res) => {
      let weather = JSON.parse(res.currentTarget.response);
      this.setState({ weather }, () => {
        this.showTemp();
      });
    };

    XHP.onerror = function (error) {
      console.log(error);
    };

    XHP.send();
  }

  showTemp() {
    let kelvin = this.state.weather.main.temp;
    this.setState({ temp: Math.floor((kelvin - 273.15) * (9 / 5) + 32) });
  }

  render() {
    return (
      <div>
        <h1>Current Weather</h1>
        <h3>City: {this.state.weather.name}</h3>
        <h3>Temp(F): {this.state.temp}</h3>
      </div>
    );
  }
}

export default Weather;

// 4de939d93b9766836f3885ee8cbdfb9a
