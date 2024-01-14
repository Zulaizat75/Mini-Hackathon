import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div>
      <div>
        
        {/* this part for homepage top banner */}

        <div class="top-banner">
          <div class="content">
            <h1>EXPERIENCE YOUR COFFEE</h1>
            <p>
              It's not just a drink <br></br>It's a lifestyle
            </p>

            <div>
              <button id="home-button">
              <Link to={'/menu'}>
                Down into the rabbit hole!</Link>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div>
        
        {/* this part for homepage middle banner */}

        <div class="middle-banner">
          <div class="content">
            <h1>THE COFFEE CULTURE</h1>
            <p>Coffee is so much more</p>
            <p>It almost doesn't make sense</p>
            <div>
              <button id="home-button">
              <Link to={'/menu'}>
                Take the pill!
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div>
        
        {/* this part for homepage bottom banner */}
        <div class="bottom-banner">
          <div class="content">
          <h1>COFFEE-NATION</h1>
          <p>Caffeination is a misnomer</p>
          <p>We are all in this together</p>
          <div>
            <button id="home-button">
              <Link to={'/menu'}>
              Bite the bullet!</Link>
            </button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;