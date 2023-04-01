import React from "react";
import {getWeatherImage} from './images/forecast-icons';

export default function WeatherIcon(props) {
    let imgSrc = getWeatherImage(props.icon)

    return (
        <img alt="Cloudy icon"
             className={props.className}
             src={imgSrc}/>
    );
}
