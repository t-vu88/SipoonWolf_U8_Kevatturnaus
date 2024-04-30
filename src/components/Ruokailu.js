

import React from 'react';

const Ruokailu = () => {
  const paragraphStyle = {
    color: 'white', // Example color
    lineHeight: '2',
    // Add more styles as needed
  };

  return (
    <div>
      <p style={paragraphStyle}>
        Otteluohjelman ollessa kohtuullisen tiivis, niin joukkueita pyydetään noudattamaan alla olevaa ruokailuaikataulua.
      </p>
    </div>
  );
};

export default Ruokailu;

