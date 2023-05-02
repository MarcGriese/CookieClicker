import React, { useState } from "react";
import Cookie from './ressource/icons/cookie.jpg'
import './game.css'
import Header from "./components/Header";

export default function Game() {
    let [count, setCount] = useState(0);

    const resetCount = () => {
        setCount(0)
    }

    const addCount = () => {
        setCount(count += 10)
    }

    const increaseCount = () => {
        setCount(count += 1)
    }

    return (
        <div className="fullview">
            <Header />
            <div className="game-content">
                <div className="cookie_container">
                    <img src={Cookie} alt="cookie" className="cookie" onClick={increaseCount} />
                </div>

                <div className="button_container">
                    <button onClick={resetCount}>Reset</button>
                    <button onClick={addCount}>+10</button>
                </div>

                <div className="counter_container">
                    <p>Counter: {count}</p>
                </div>
            </div>

        </div>
    )
}