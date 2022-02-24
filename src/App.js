import React, { useState, useEffect } from 'react';

import './App.css';

const App = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);


    useEffect(() => {
        fetch(`https://api.chucknorris.io/jokes/random`)
        .then((response) => {
            if (!response.ok) {
                throw new Error(
                    `This is an HTTP error: The status is ${response.status}`
                );
                }
                return response.json();
        })
        .then((actualData) => {
            setData([actualData]);
            setError(null);
        })
        .catch((err) => {
            setError(err.message);
            setData(null);
        })
    }, []);

    return (
        <div className="App">
            {data &&
                data.map(({ value, id }) => (
                    <div className='joke-box' key={id}>
                        <h3>{ value }</h3>
                    </div>
            ))}
        </div>
    );
}

export default App;