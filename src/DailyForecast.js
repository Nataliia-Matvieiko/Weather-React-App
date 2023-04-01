import React, {useState, useEffect} from "react";
import ForecastDay from "./ForecastDay";
import axios from "axios";

export default function DailyForecast(props) {
    let [weatherData, setWeatherData] = useState(undefined);
    let coordinates = props.coordinates;

    function showTemperature(response) {
        setWeatherData(response.data);
    }

    function fetchWeatherData() {
        let apiKey = "be81f193e065bf5feb2d944c7336968b";
        let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(showTemperature);
    }

    useEffect(function () {
        fetchWeatherData()
    }, [coordinates])

    if (weatherData === undefined) return <div>Loading</div>

    let daily = weatherData.daily;

    return (
        <div id="forecast">
            {
                daily.map(function (day) {
                    return <ForecastDay day={day}/>
                })
            }
        </div>
    );
}