// Content.js
import React from 'react';

const Content = ({ activeTab, activeDate, gameResults, updateResult }) => {
  const teams = {
    lauantai: {
      u8lohkoa: ["Woft Musta   ", "Salamat White", "Hunters Blue", "HJK Blue"],
      u8lohkob: ["Wolf Keltainen", "Salamat Blue", "Hunters Yellow", "HJK White"],
      u7: ["Wolf", "Haki Blue", "HIFK red", "Haki Black", "Hunters U7"]
    },
    sunnuntai: {
      u8lohkoa: ["Wolf Musta", "HIFK Red", "HJK Black", "Viikingit Red"],
      u8lohkob: ["Wolf Keltainen", "HIFK White", "HJK Blue", "Viikingit White"],
      u7: ["Wolf", "Haki White", "HIFK White", "HIFK Blue"]
    }
  };

  const games = {
    lauantai: {
      u8lohkoa: [
        { time: '10:00', team1: 'Woft Musta', team2: 'Salamat White', result1: 0, result2: 0 },
        { time: '10:40', team1: 'Hunters Blue', team2: 'HJK Blue', result1: 0, result2: 0 },
        { time: '11:20', team1: 'Woft Musta', team2: 'Salamat White', result1: 0, result2: 0 },
        { time: '12:10', team1: 'Hunters Blue', team2: 'HJK Blue', result1: 0, result2: 0 },
        { time: '12:50', team1: 'Woft Musta', team2: 'Salamat White', result1: 0, result2: 0 },
        { time: '13:40', team1: 'Hunters Blue', team2: 'HJK Blue', result1: 0, result2: 0 }
      ],
      u8lohkob: [
        { time: '10:00', team1: 'Wolf Keltainen', team2: 'Salamat Blue', result1: 0, result2: 0 },
        { time: '10:40', team1: 'Hunters Yellow', team2: 'HJK White', result1: 0, result2: 0 },
        { time: '11:20', team1: 'Wolf Keltainen', team2: 'Hunters Yellow', result1: 0, result2: 0 },
        { time: '12:10', team1: 'Salamat Blue', team2: 'HJK White', result1: 0, result2: 0 },
        { time: '12:50', team1: 'Wolf Keltainen', team2: 'HJK White', result1: 0, result2: 0 },
        { time: '13:40', team1: 'Salamat Blue', team2: 'Hunter Yellow', result1: 0, result2: 0 }
      ],
      u7: [
        { time: '10:00', team1: 'Wolf', team2: 'Hunters U7', result1: 0, result2: 0 },
        { time: '10:40', team1: 'HIFK Red', team2: 'Haki Blue', result1: 0, result2: 0 },
        { time: '11:20', team1: 'Haki Blue', team2: 'Haki Black', result1: 0, result2: 0 },
        { time: '12:10', team1: 'HIFK Red', team2: 'Hunters U7', result1: 0, result2: 0 },
        { time: '12:50', team1: 'Woft ', team2: 'HIFK Red', result1: 0, result2: 0 },
        { time: '13:40', team1: 'Hunters U7', team2: 'Haki Black', result1: 0, result2: 0 },
        { time: '14:20', team1: 'Wolf', team2: 'Haki Blue', result1: 0, result2: 0 },
        { time: '15:10', team1: 'HIFK Red', team2: 'Haki Black', result1: 0, result2: 0 },
        { time: '15:50', team1: 'Wolf', team2: 'Haki Black', result1: 0, result2: 0 },
        { time: '15:50', team1: 'Haki Blue', team2: 'Hunters U7', result1: 0, result2: 0 },
      ]
    },
    sunnuntai: {
      u8lohkoa: [
        { time: '10:00', team1: 'Woft Musta', team2: 'HIFK Red', result1: 0, result2: 0 },
        { time: '10:40', team1: 'HJK Black', team2: 'Viikingit Red', result1: 0, result2: 0 },
        { time: '11:20', team1: 'Woft Musta', team2: 'HJK Black', result1: 0, result2: 0 },
        { time: '12:10', team1: 'HIFK Red', team2: 'Viikingit Red', result1: 0, result2: 0 },
        { time: '12:50', team1: 'Woft Musta', team2: 'Viikingit Red', result1: 0, result2: 0 },
        { time: '13:40', team1: 'HIFK Red', team2: 'HJK Black', result1: 0, result2: 0 }
      ],
      u8lohkob: [
        { time: '10:00', team1: 'Wolf Keltainen', team2: 'HIFK White', result1: 0, result2: 0 },
        { time: '10:40', team1: 'HJK Blue', team2: 'Viikingit White', result1: 0, result2: 0 },
        { time: '11:20', team1: 'Wolf Keltainen', team2: 'HJK Blue', result1: 0, result2: 0 },
        { time: '12:10', team1: 'HIFK White', team2: 'Viikingit White', result1: 0, result2: 0 },
        { time: '12:50', team1: 'Wolf Keltainen', team2: 'Viikingit White', result1: 0, result2: 0 },
        { time: '13:40', team1: 'HIFK White', team2: 'HJK Blue', result1: 0, result2: 0 }
      ],
      u7: [
        { time: '10:00', team1: 'Wolf', team2: 'Haki White', result1: 0, result2: 0 },
        { time: '10:40', team1: 'HIFK White', team2: 'HIFK Blue', result1: 0, result2: 0 },
        { time: '11:20', team1: 'Wolf', team2: 'HIFK White', result1: 0, result2: 0 },
        { time: '12:10', team1: 'Haki White', team2: 'HIFK Blue', result1: 0, result2: 0 },
        { time: '12:50', team1: 'Wolf ', team2: 'HIFK Blue', result1: 0, result2: 0 },
        { time: '13:40', team1: 'Haki White', team2: 'HIFK White', result1: 0, result2: 0 },
        
      ]
    }
  };

  const formatGroupName = (groupName) => {
    return groupName.replace('u8lohkoa', 'U8 lohko A').replace('u8lohkob', 'U8 lohko B').replace('u7', 'U7');
  };

  return (
    <div>
      {(activeTab === 'lauantai' || activeTab === 'sunnuntai') && (
        <div>
          {Object.keys(teams[activeTab]).map((group) => (
            <div key={group}>
              <hr />
              <h3 className='group'>{formatGroupName(group)}</h3>
              {/* Team list */}
              <div className="team-list">
                {teams[activeTab][group].map((team, index) => (
                  <React.Fragment key={index}>
                    <span className="team">{team}</span>
                    {index !== teams[activeTab][group].length - 1 && <hr className="team-divider" />}
                  </React.Fragment>
                ))}
              </div>
              <div>
                <h3>Pelit</h3>
              </div>
              {/* Game information */}
              <div className="game-container">
                {games[activeTab][group].map((game, index) => (
                  <div className="game-info" key={index}>
                    <div className="game-row"> Klo {game.time}</div>
                    <div className="game-row">
                      <table>
                        <tbody>
                          <tr>
                            <td>{game.team1}</td>
                            <td>-</td>
                            <td>{game.team2}</td>
                          </tr>
                          <tr>
                            <td>{game.result1}</td>
                            <td></td>
                            <td>{game.result2}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="game-row">
                      <button onClick={() => updateResult(group, index, game.result1, game.result2)}>Update Result</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Content;
