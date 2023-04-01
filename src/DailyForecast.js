import React, {useState, useEffect, useCallback} from "react";
import ForecastDay from "./ForecastDay";
import axios from "axios";

export default function DailyForecast(props) {
    let [weatherData, setWeatherData] = useState(undefined);
    let city = props.city;

    console.log(weatherData)

    function showTemperature(response) {
        setWeatherData(response.data);
    }

    const fetchWeatherData = useCallback(() => {
        let apiKey = "871226bt3b923e3o0bf9dcaf40d32e00";
        let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
        axios.get(apiUrl).then(showTemperature);
    }, [city])

    useEffect(function () {
        setWeatherData(undefined)
        fetchWeatherData()
    }, [city, fetchWeatherData])

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