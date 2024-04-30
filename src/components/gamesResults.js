// GamesAndResults.js
import React from 'react';

const GamesAndResults = ({ group }) => {
  // Assuming games and results are stored in an array
  const games = [
    { time: '10:00', team1: 'Wolf Must', team2: 'Salama White', result1: '2', result2: '1' },
    { time: '10:40', team1: 'Hunters Blue', team2: 'HJK Blue', result1: '3', result2: '3' }
    // Add more games as needed
  ];

  return (
    <div>
      <h3>Games and Results</h3>
      <table>
        <thead>
          <tr>
            <th>Time</th>
            <th>Team 1</th>
            <th>Team 2</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          {games.map((game, index) => (
            <React.Fragment key={index}>
              <tr>
                <td>{game.time}</td>
                <td>{game.team1}</td>
                <td>{game.team2}</td>
                <td>{`${game.result1} - ${game.result2}`}</td>
              </tr>
              {/* Add a row with a horizontal line */}
              <tr>
                <td colSpan="4">
                  <hr />
                </td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GamesAndResults;
