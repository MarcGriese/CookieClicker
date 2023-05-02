import React from "react";
import './home.css'
import Cookie from './ressource/icons/cookie.jpg'
import { Link } from 'react-router-dom'
import Header from "./components/Header";

export default function Home() {
    return (
        <div className="fullview">
            <Header/>

            <div className="content">
                <Link to='/game' className="cookie_container">
                    
                    <img src={Cookie} alt="cookie" className="cookie" />
                </Link>

                <div className="text_container">
                    <p>Press the cookie to start playing!</p>
                </div>

            </div>

            <div className="footer">
                <p>Software Engineering</p>
            </div>

        </div>
    )
}