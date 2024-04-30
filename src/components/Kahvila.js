// Kahvila.js
import React from 'react';

const Kahvila = () => {
  const paragraphStyle = {
    color: '#F0AE2E', // Example color
  };
  return (
    <div>
      <div>
      <h3 style={paragraphStyle}>Herkkuja</h3>
      <p>Tervetuloa herkuttelemaan turnauksen tauolla! Mokkapalloja, ...</p>
      <p> Grillipisteemme tarjoaa vastapaistettua makkaraa. </p>
      </div>
      <div>
      <h3 style={paragraphStyle}>Arpajaiset</h3>
      <p>Tule mukaan jännitykseen ja voita mahtavia palkintoja Turnauksen arpajaisissa! </p>

<p>Vain 2€:lla saat mahdollisuuden voittaa, ja jos haluat tuplata mahdollisuutesi, kkolme arpaa on sinun vain 5€:lla. </p>

<p>Älä jätä tilaisuuttasi käyttämättä – tule, osta arpa ja liity voittajien joukkoon!</p>
    </div>
    <div>
      <h3 style={paragraphStyle}>Lämäritutka</h3>
    </div>
    <div>
      <h3 style={paragraphStyle}>Arpajaiset</h3>
    </div>
    <div>
      <h3 style={paragraphStyle}>Sponsorit</h3>
    </div>
    </div>
  );
};

export default Kahvila;
