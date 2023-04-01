import React, {useState, useEffect, useCallback} from "react";
import CityLinks from "./CityLinks";
import Button from "./Button";
import WeatherData from "./WeatherData";
import {Circles} from "react-loader-spinner";
import axios from "axios";

export default function CurrentWeather() {
    let [weatherData, setWeatherData] = useState(undefined);
    let [city, setCity] = useState("");

    // console.log(weatherData)

    function showTemperature(response) {
        setWeatherData(response.data);
    }

    function updateCity(event) {
        setCity(event.target.value);
    }

    let apiKey = "3a94f3778290bfeee61278505dbbe51d"

    const fetchWeatherData = useCallback((city) => {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${
            city
        }&appid=${apiKey}&units=metric`;
        axios.get(url).then(showTemperature);
    }, [apiKey])

    const showPosition = (position) => {
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;

        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

        axios.get(apiUrl).then(showTemperature);
    }

    useEffect(function () {
        fetchWeatherData("Berdiansk")
    }, [fetchWeatherData])

    function handleSubmit(event) {
        event.preventDefault();
        fetchWeatherData(city);
        console.log(city)
    }

    function currentLocationClick(event) {
        event.preventDefault();
        navigator.geolocation.getCurrentPosition(showPosition);
    }

    return (
        <>
            <CityLinks onClick={(city) => {
                console.log(city)
                fetchWeatherData(city);
            }}/>
            <form className="row enter-a-city"
                  id="search-form"
                  onSubmit={handleSubmit}
            >
                <div className="col">
                    <input
                        autoComplete="off"
                        autoFocus
                        className="form-control col-9 shadow-sm"
                        id="city-input"
                        placeholder="Enter a city"
                        type="text"
                        onChange={updateCity}
                        value={city}
                    />
                </div>

                <div className="col-auto">
                    <Button bootstrapButtonType="primary">Search</Button>
                </div>

                <div className="col-auto">
                    <Button bootstrapButtonType="success" onClick={currentLocationClick}>Current</Button>
                </div>
            </form>

            <hr/>
            {weatherData === undefined && <div className="loader-container"><Circles
                height="80"
                width="80"
                color="white"
                ariaLabel="circles-loading"
                wrapperStyle={{display: "inline"}}
                wrapperClass=""
                visible={true}
            /></div>}
            {weatherData !== undefined && <WeatherData data={weatherData}/>}
            <hr/>

        </>
    );
}