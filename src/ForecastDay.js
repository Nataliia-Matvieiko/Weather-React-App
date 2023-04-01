import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay(props) {
    let day = props.day;
    let icon = day.condition.icon
    // console.log(day);

    function formatDay(timestamp) {
        let date = new Date(timestamp * 1000)
        let day = date.getDay()
        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

        return days[day];
    };


    return (
        <div className="forecast-day">
            <div className="weather-forecast-date">{formatDay(day.time)}</div>
            <WeatherIcon icon={icon}/>
            <div className="weather-forecast-temperatures">
                <span className="weather-forecast-temperature-max">{Math.round(day.temperature.maximum)}°/ </span>
                <span className="weather-forecast-temperature-min"> {Math.round(day.temperature.minimum)}°</span>
            </div>
        </div>
    );
}