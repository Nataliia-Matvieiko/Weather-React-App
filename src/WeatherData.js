import React from "react";
import WeatherIcon from "./WeatherIcon";
import DailyForecast from "./DailyForecast";

export default function WeatherData(props) {
    function formatTime(date) {
        let days = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
        ];
        let day = days[date.getDay()];
        let hour = date.getHours();
        if (hour < 10) {
            hour = `0${hour}`;
        }
        let minute = date.getMinutes();
        if (minute < 10) {
            minute = `0${minute}`;
        }
        return `${day} ${hour}:${minute}`;
    }

    let {name, dt, main: {humidity, temp}, wind: {speed}, weather, coord} = props.data;
    let date = formatTime(new Date(dt * 1000));
    let description = weather[0].main;
    let weatherIcon = weather[0].icon;

    return (
        <>
            <div className="row">
                <div className="col-8">
                    <h1 id="current-city">{name}</h1>

                    <br/>

                    <ul>
                        <li id="currentTime">{date}</li>
                        <li id="description">{description}</li>
                    </ul>

                    <div id="temperature-container">
                        <WeatherIcon icon={weatherIcon} className={"main-icon"}/>

                        <span className="temperature">{Math.round(temp)}</span>
                        <span className="units">°C</span>
                    </div>
                </div>

                <div className="col-4 position-windy-humidity">
                    <div id="current-humidity">Humidity: {humidity}%</div>
                    <div id="current-wind">Wind: {Math.round(speed)} km/h</div>
                </div>
            </div>
            <DailyForecast coordinates={coord}/>
        </>
    );
}