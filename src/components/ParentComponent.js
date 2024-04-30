// ParentComponent.js
import React, { useState } from 'react';
import Content from './components/content';

const ParentComponent = () => {
  // Define the state to store game results
  const [gameResults, setGameResults] = useState({
    lauantai: {
      u8lohkoa: [
        { result1: 0, result2: 0 },
        // Add more game result objects as needed
      ],
      // Add more groups as needed
    },
    sunnuntai: {
      // Add game result objects for Sunday as needed
    },
  });

  // Define activeTab and setActiveTab state variables
  const [activeTab, setActiveTab] = useState('lauantai');

  // Define activeDate and setActiveDate state variables
  const [activeDate, setActiveDate] = useState(/* initial value */);

  // Define the updateResult function to update game results
  const updateResult = (group, index, result1, result2) => {
    console.log("Updating result:", group, index, result1, result2);
    setGameResults(prevResults => ({
      ...prevResults,
      [activeTab]: {
        ...prevResults[activeTab],
        [group]: prevResults[activeTab][group].map((game, i) => 
          i === index ? { ...game, result1, result2 } : game
        ),
      },
    }));
  };

  return (
    <div>
      {/* Render Content component and pass activeTab, activeDate, and updateResult as props */}
      <Content
        activeTab={activeTab}
        activeDate={activeDate}
        updateResult={updateResult}
      />
    </div>
  );
};

export default ParentComponent;
