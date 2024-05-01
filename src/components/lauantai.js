import React, { useState, useEffect } from 'react';
import { useUser } from './UserContext';
import { database } from '../firebase';

const Lauantai = () => {
  const { user } = useUser(); 
  const isAdmin = user && user.isAdmin; // Check if the user is an admin

  const [games, setGames] = useState({});
  const [editingGameId, setEditingGameId] = useState(null); // Define editingGameId state
  const [editedResults, setEditedResults] = useState({});

  const [teams] = useState({
    u8lohkoa: ["Wolf Musta", "Salamat White", "Hunters Blue", "HJK Blue"],
    u8lohkob: ["Wolf Keltainen", "Salamat Blue", "Hunters Yellow", "HJK White"],
    u7: ["Wolf", "Haki Blue", "HIFK Red", "Haki Black", "Hunters U7"]
  });

  useEffect(() => {
    const gamesRef = database.ref('games');

    const fetchGames = async () => {
      try {
        const snapshot = await gamesRef.once('value');
        const data = snapshot.val();
        setGames(data);
      } catch (error) {
        console.error('Error fetching games:', error);
      }
    };

    fetchGames();

    // Clean up function
    return () => {
      gamesRef.off(); // Unsubscribe from Firebase Realtime Database
    };
  }, []);

  const handleUpdateResult = (groupId, gameId, editedResult1, editedResult2) => {
    const updatedGames = { ...games };
    const gameIndex = updatedGames[groupId].findIndex(game => game.id === gameId);
    if (gameIndex !== -1) {
      updatedGames[groupId][gameIndex].result1 = editedResult1;
      updatedGames[groupId][gameIndex].result2 = editedResult2;
      database.ref('games').set(updatedGames); // Update Firebase database
    }
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

    // Check if groupGames is defined before iterating over it
    if (groupGames) {
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
    }

    // Transform team stats into an array to sort by points
    const teamStatsArray = Object.values(teamStats);

    // Sort teams by points (descending)
    teamStatsArray.sort((a, b) => b.points - a.points);

    return teamStatsArray;
  };

  return (
    <div>
      {games && Object.keys(games).map((groupId) => (
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
          {/* Render quarter-finals games here */}
        </div>
      </div>
    </div>
  );  
};

export default Lauantai;
