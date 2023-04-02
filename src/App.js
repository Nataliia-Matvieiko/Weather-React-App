import React from "react";
import './App.css';
import Logo from "./Logo";
import "./styles.css";

import CurrentWeather from "./CurrentWeather";

function App() {

    return (
        <>
            <div className="container">
                <Logo/>
                <CurrentWeather/>
            </div>
            <div className="footer">
                This project was coded by <a href="https://deluxe-sundae-cbfa48.netlify.app" target="_blank" rel="noreferrer" >Nataliia Matvieiko</a> and is
                <a href="https://github.com/Nataliia-Matvieiko/Weather-React-App"> open-sourced on GitHub </a>
            </div>
        </>
    );
}

export default App;
