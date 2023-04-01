import React, {useState} from "react";
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
                This project was coded by Nataliia Matvieiko and is
                <a href="https://github.com/Nataliia-Matvieiko/PlusFinalProject">open-sourced on GitHub </a>
            </div>
        </>
    );
}

export default App;
