import React from 'react'
import ReactDom from "react-dom";
import "./index.css"
import App from "./App";



// have to have this to render
ReactDom.render(
    <React.StrictMode>
      <App/>
    </React.StrictMode>,
    document.getElementById("root")
)



/*
FINAL HTML

<div class="container">
      <ul className="tours">
        <li className="tour">
          <img src="https://dl.airtable.com/.attachments/a0cd0702c443f31526267f38ea5314a1/2447eb7a/paris.jpg" alt="" />
          <div className="tour__info__container">
            <div className="heading">
              <h2>Best Of Paris In 7 Days Tour</h2>
              <h3>$1,995</h3>
            </div>
            <p>
            Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of the City of Light: the masterpiece-packed Louvre and Orsay museums, resilient Notre-Dame Cathedral, exquisite Sainte-Chapelle, and extravagant Palace of Versailles. You'll also enjoy guided neighborhood walks through the city's historic heart as well as quieter moments to slow down and savor the city's intimate cafés, colorful markets, and joie de vivre. Join us for the Best of Paris in 7 Days
            </p>
            <button className="not-intrested-btn">Not Intrested</button>
          </div>
        </li>

        <li className="tour">
          <img src="https://dl.airtable.com/.attachments/a0cd0702c443f31526267f38ea5314a1/2447eb7a/paris.jpg" alt="" />
          <div className="tour__info__container">
            <div className="heading">
              <h2>Best Of Paris In 7 Days Tour</h2>
              <h3>$1,995</h3>
            </div>
            <p>
            Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of the City of Light: the masterpiece-packed Louvre and Orsay museums, resilient Notre-Dame Cathedral, exquisite Sainte-Chapelle, and extravagant Palace of Versailles. You'll also enjoy guided neighborhood walks through the city's historic heart as well as quieter moments to slow down and savor the city's intimate cafés, colorful markets, and joie de vivre. Join us for the Best of Paris in 7 Days
            </p>
            <button className="not-intrested-btn">Not Intrested</button>
          </div>
        </li>
      </ul>
    </div>

*/