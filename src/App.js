import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
    const options = ["town", "film", "place"];
    return (
        <div className="App">
            <header className="App-header">
                {
                    options[
                        Math.floor(Math.random() * Math.floor(options.length))
                    ]
                }
            </header>
        </div>
    );
}

export default App;
