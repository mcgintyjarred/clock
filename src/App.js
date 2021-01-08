import React, { useState, useEffect } from 'react'
import './App.css';

function App() {

    const [time, setTime] = useState(new Date())

    // Get new time every second
    useEffect(() => {
        // Get new current time
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000 );

        return () => {
            clearInterval(interval);
        };

    }, []);

    // Displayed
    return (
        <div className="App">
        <h1>
        {
            time.toLocaleTimeString()
        }
        </h1>
        </div>
    );
}

export default App;
