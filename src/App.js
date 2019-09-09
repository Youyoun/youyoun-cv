import React from 'react';
import logo from './logo.svg';

import Sidebar from "./components/sidebar";

import './css/bootstrap.min.css';
import './css/style.css';
import './App.css';

function App() {
    return (
        <div className="App" id="colorlib-page">
            <Sidebar
                photo="Insert Photo"
                name="Younes Belkouchi"
                title="Machine Learning and Software Engineer"/>
            <header className="App-header" id="colorlib-main">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
