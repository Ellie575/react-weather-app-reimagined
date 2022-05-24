import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <div className="row">
        <div className="col-4">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/rain_light.png"
            alt="Showers"
          />
          6 °C
        </div>
        <div className="col-4">
          <ul>
            <li>Precipitation: 80%</li>
            <li>Humidity: 81%</li>
            <li>Wind: 6 km/h</li>
          </ul>
        </div>
        <div className="col-4">
          <h3>Sydney</h3>
          <ul>
            <li>Tuesday 16:30</li>
            <li>Showers</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
