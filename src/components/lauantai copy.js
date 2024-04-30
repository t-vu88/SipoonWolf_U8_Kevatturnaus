import React, { useState, useEffect } from 'react';
import { useUser } from './UserContext';
const saveToLocalStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

// Function to retrieve data from local storage
const getFromLocalStorage = (key) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
};
const Lauantai = () => {
  const { user } = useUser(); // Get the user from the UserContext
  const isAdmin = user && user.isAdmin; // Check if the user is an admin

  const [games, setGames] = useState({
    u8lohkoa: [
      { id: 1, time: '10:00', team1: 'Wolf Musta', team2: 'Salamat White', result1: 0, result2: 0 },
      { id: 2, time: '10:40', team1: 'Hunters Blue', team2: 'HJK Blue', result1: 0, result2: 0 },
      { id: 3, time: '11:20', team1: 'Wolf Musta', team2: 'Hunters Blue', result1: 0, result2: 0 },
      { id: 4, time: '12:10', team1: 'Salamat White', team2: 'HJK Blue', result1: 0, result2: 0 },
      { id: 5, time: '12:50', team1: 'Wolf Musta', team2: 'HJK Blue', result1: 0, result2: 0 },
      { id: 6, time: '13:40', team1: 'Salamat White', team2: 'Hunters Blue', result1: 0, result2: 0 }
    ],
    u8lohkob: [
      { id: 1, time: '10:00', team1: 'Wolf Keltainen', team2: 'Salamat Blue', result1: 0, result2: 0 },
      { id: 2, time: '10:40', team1: 'Hunters Yellow', team2: 'HJK White', result1: 0, result2: 0 },
      { id: 3, time: '11:20', team1: 'Wolf Keltainen', team2: 'Hunters Yellow', result1: 0, result2: 0 },
      { id: 4, time: '12:10', team1: 'Salamat Blue', team2: 'HJK White', result1: 0, result2: 0 },
      { id: 5, time: '12:50', team1: 'Wolf Keltainen', team2: 'HJK White', result1: 0, result2: 0 },
      { id: 6, time: '13:40', team1: 'Salamat Blue', team2: 'Hunter Yellow', result1: 0, result2: 0 }
    ],
    u7: [
      { id: 1, time: '10:00', team1: 'Wolf', team2: 'Hunters U7', result1: 0, result2: 0 },
      { id: 2, time: '10:40', team1: 'HIFK Red', team2: 'Haki Blue', result1: 0, result2: 0 },
      { id: 3, time: '11:20', team1: 'Haki Blue', team2: 'Haki Black', result1: 0, result2: 0 },
      { id: 4, time: '12:10', team1: 'HIFK Red', team2: 'Hunters U7', result1: 0, result2: 0 },
      { id: 5, time: '12:50', team1: 'Wolf ', team2: 'HIFK Red', result1: 0, result2: 0 },
      { id: 6, time: '13:40', team1: 'Hunters U7', team2: 'Haki Black', result1: 0, result2: 0 },
      { id: 7, time: '14:20', team1: 'Wolf', team2: 'Haki Blue', result1: 0, result2: 0 },
      { id: 8, time: '15:10', team1: 'HIFK Red', team2: 'Haki Black', result1: 0, result2: 0 },
      { id: 9, time: '15:50', team1: 'Wolf', team2: 'Haki Black', result1: 0, result2: 0 },
      { id: 10, time: '15:50', team1: 'Haki Blue', team2: 'Hunters U7', result1: 0, result2: 0 },
    ]
  });

  const [teams, setTeams] = useState({
    u8lohkoa: ["Wolf Musta", "Salamat White", "Hunters Blue", "HJK Blue"],
    u8lohkob: ["Wolf Keltainen", "Salamat Blue", "Hunters Yellow", "HJK White"],
    u7: ["Wolf", "Haki Blue", "HIFK Red", "Haki Black", "Hunters U7"]
  });

  const [editedResults, setEditedResults] = useState({});
  const [editingGameId, setEditingGameId] = useState(null);

  useEffect(() => {
    const storedGames = localStorage.getItem('lauantaiGames');
    console.log(JSON.parse(storedGames)); // Log the contents of localStorage
    if (storedGames) {
      setGames(JSON.parse(storedGames));
    }
  }, []);

  const handleUpdateResult = (groupId, gameId) => {
    const editedResult1 = editedResults[`${groupId}-${gameId}-result1`] || 0;
    const editedResult2 = editedResults[`${groupId}-${gameId}-result2`] || 0;

    const updatedGames = { ...games };
    const gameIndex = updatedGames[groupId].findIndex(game => game.id === gameId);
    if (gameIndex !== -1) {
      updatedGames[groupId][gameIndex].result1 = editedResult1;
      updatedGames[groupId][gameIndex].result2 = editedResult2;
      localStorage.setItem('lauantaiGames', JSON.stringify(updatedGames));
    }

    setEditingGameId(null);
  };

  const toggleEditing = (gameId) => {
    setEditingGameId(editingGameId === gameId ? null : gameId);
  };

  const formatGroupName = (groupName) => {
    switch (groupName) {
      case 'u8lohkoa':
        return 'U8 lohko A';
      case 'u8lohkob':
        return 'U8 lohko B';
      case 'u7':
        return 'U7';
      default:
        return groupName;
    }
  };

  const calculateTeamStats = (groupId) => {
    const groupGames = games[groupId];
    const teamStats = {};
  
    groupGames.forEach((game) => {
      const team1 = game.team1;
      const team2 = game.team2;
  
      // Initialize team stats with 0 points and games played if not already initialized
      if (!teamStats[team1]) {
        teamStats[team1] = { name: team1, win: 0, loss: 0, draw: 0, points: 0, gamesPlayed: 0 };
      }
      if (!teamStats[team2]) {
        teamStats[team2] = { name: team2, win: 0, loss: 0, draw: 0, points: 0, gamesPlayed: 0 };
      }
  
      // Update games played
      
  
      // Update points only if the result is not 0-0
      if (game.result1 !== 0 || game.result2 !== 0) {
        if (game.result1 > game.result2) {
          teamStats[team1].win++;
          teamStats[team1].points += 3; // Increment points for team1
          teamStats[team2].loss++;
        } else if (game.result1 < game.result2) {
          teamStats[team2].win++;
          teamStats[team2].points += 3; // Increment points for team2
          teamStats[team1].loss++;
        } else {
          teamStats[team1].draw++;
          teamStats[team2].draw++;
          teamStats[team1].points += 1; // Increment points for team1
          teamStats[team2].points += 1; // Increment points for team2
        }
        teamStats[team1].gamesPlayed++;
      teamStats[team2].gamesPlayed++;
      }
    });
  
    // Transform team stats into an array to sort by points
    const teamStatsArray = Object.values(teamStats);
  
    // Sort teams by points (descending)
    teamStatsArray.sort((a, b) => b.points - a.points);
  
    return teamStatsArray;
  };
  
  // Inside the Lauantai component

// Define the quarter-finals games based on the rankings of teams in u8lohkoa and u8lohkob
const u8lohkoaTeams = calculateTeamStats("u8lohkoa");
  const u8lohkobTeams = calculateTeamStats("u8lohkob");

  const [quarterFinalsGames, setQuarterFinalsGames] = useState([
    { time: "14:20", team1: '', team2: '', result1: 0, result2: 0 },
    { time: "14:20", team1: '', team2: '', result1: 0, result2: 0 },
    { time: "15:10", team1: '', team2: '', result1: 0, result2: 0 },
    { time: "15:10", team1: '', team2: '', result1: 0, result2: 0 },
  ]);
  useEffect(() => {
    const storedQuarterFinals = localStorage.getItem('quarterFinalsGames');
    if (storedQuarterFinals) {
      setQuarterFinalsGames(JSON.parse(storedQuarterFinals));
    }
  }, []);
  
  // When an admin updates the quarter-final games, update local storage and state
  const handleUpdateQuarterFinals = (updatedQuarterFinals) => {
    localStorage.setItem('quarterFinalsGames', JSON.stringify(updatedQuarterFinals));
    setQuarterFinalsGames(updatedQuarterFinals);
  };
<div>
  <h3>Quarter-Finals</h3>
  <div className="game-container">
    {quarterFinalsGames.map((game, index) => (
      <div className="game-info" key={index}>
        <div className="game-row">Klo {game.time}</div>
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
        {/* Add editing functionality for admins if needed */}
      </div>
    ))}
  </div>
</div>;

  
return (
  <div>
    {Object.keys(games).map((groupId) => (
      <div key={groupId}>
        <hr />
        <h2 className='group'>{formatGroupName(groupId)}</h2>

        <div className="team-list">
          {teams[groupId].map((team, index) => (
            <React.Fragment key={index}>
              <span className="team">{team}</span>
              {index !== teams[groupId].length - 1 && <hr className="team-divider" />}
            </React.Fragment>
          ))}
        </div>
        <div>
          <h3>Lohkotilanteet</h3>
          <table className='ranking-table'>
            <thead>
              <tr>
                <th>Joukkue</th>
                <th>Ott</th>
                <th>V</th>
                <th>H</th>
                <th>T</th>
                <th>Pst</th>
              </tr>
            </thead>
            <tbody>
              {calculateTeamStats(groupId).map((teamStats) => (
                <tr key={teamStats.name}>
                  <td>{teamStats.name}</td>
                  <td>{teamStats.gamesPlayed || 0}</td>
                  <td>{teamStats.win || 0}</td>
                  <td>{teamStats.loss || 0}</td>
                  <td>{teamStats.draw || 0}</td>
                  <td>{teamStats.points || 0}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div>
          <h3>Otteluohjelma</h3>
        </div>
        <div className="game-container">
          {games[groupId].map((game) => (
            <div className="game-info" key={game.id}>
              <div className="game-row">Klo {game.time}</div>
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
                {isAdmin && editingGameId === game.id ? (
                  <>
                    <input
                      type="number"
                      value={editedResults[`${groupId}-${game.id}-result1`] || 0}
                      onChange={(e) =>
                        setEditedResults({
                          ...editedResults,
                          [`${groupId}-${game.id}-result1`]: parseInt(e.target.value),
                        })
                      }
                    />
                    :
                    <input
                      type="number"
                      value={editedResults[`${groupId}-${game.id}-result2`] || 0}
                      onChange={(e) =>
                        setEditedResults({
                          ...editedResults,
                          [`${groupId}-${game.id}-result2`]: parseInt(e.target.value),
                        })
                      }
                      disabled={!isAdmin}
                    />
                    <button onClick={() => handleUpdateResult(groupId, game.id)}>Save</button>
                  </>
                ) : (
                  isAdmin && (
                    <button onClick={() => toggleEditing(game.id)}>
                      {editingGameId === game.id ? 'Cancel' : 'Edit Result'}
                    </button>
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    ))}

    <div>
      <hr/>
      <h2>Sijoitusottelut</h2>
      <div className="game-container">
  {quarterFinalsGames.map((game, index) => (
    <div className="game-info" key={index}>
      <div className="game-row">Klo {game.time}</div>
      <div className="game-row">
        {isAdmin ? (
          <>
            <select
              value={game.team1}
              onChange={(e) => {
                const updatedQuarterFinalsGames = [...quarterFinalsGames];
                updatedQuarterFinalsGames[index].team1 = e.target.value;
                handleUpdateQuarterFinals(updatedQuarterFinalsGames);
              }}
            >
              <option value="">Choose Team 1 (U8 Lohko A)</option>
              {u8lohkoaTeams.map((team) => (
                <option key={team.name} value={team.name}>{team.name}</option>
              ))}
            </select>
            <span>-</span>
            <select
              value={game.team2}
              onChange={(e) => {
                const updatedQuarterFinalsGames = [...quarterFinalsGames];
                updatedQuarterFinalsGames[index].team2 = e.target.value;
                handleUpdateQuarterFinals(updatedQuarterFinalsGames);
              }}
            >
              <option value="">Choose Team 2 (U8 Lohko B)</option>
              {u8lohkobTeams.map((team) => (
                <option key={team.name} value={team.name}>{team.name}</option>
              ))}
            </select>
          </>
        ) : (
          <>
            <span>{game.team1}</span>
            <span>-</span>
            <span>{game.team2}</span>
          </>
        )}
      </div>
      <div className="game-row">
        {isAdmin ? (
          <>
            <input
              type="number"
              value={game.result1}
              onChange={(e) => {
                const updatedQuarterFinalsGames = [...quarterFinalsGames];
                updatedQuarterFinalsGames[index].result1 = parseInt(e.target.value) || 0;
                handleUpdateQuarterFinals(updatedQuarterFinalsGames);
              }}
            />
            <span>-</span>
            <input
              type="number"
              value={game.result2}
              onChange={(e) => {
                const updatedQuarterFinalsGames = [...quarterFinalsGames];
                updatedQuarterFinalsGames[index].result2 = parseInt(e.target.value) || 0;
                handleUpdateQuarterFinals(updatedQuarterFinalsGames);
              }}
            />
          </>
        ) : (
          <>
            <span>{game.result1}</span>
            <span>-</span>
            <span>{game.result2}</span>
          </>
        )}
      </div>
    </div>
  ))}
</div>

    </div>
  </div>
);  
};

export default Lauantai;