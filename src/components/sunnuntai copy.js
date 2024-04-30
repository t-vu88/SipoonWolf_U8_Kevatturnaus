import React, { useState, useEffect } from 'react';
import { useUser } from './UserContext';

const Sunnuntai = () => {
  const { user } = useUser(); // Get user information from UserContext
  const isAdmin = user && user.isAdmin; 
  
  const [games, setGames] = useState({
    u8lohkoa: [
        {id: 1, time: '10:00', team1: 'Woft Musta', team2: 'HIFK Red', result1: 0, result2: 0 },
        { id: 2, time: '10:40', team1: 'HJK Black', team2: 'Viikingit Red', result1: 0, result2: 0 },
        { id: 3, time: '11:20', team1: 'Woft Musta', team2: 'HJK Black', result1: 0, result2: 0 },
        { id: 4, time: '12:10', team1: 'HIFK Red', team2: 'Viikingit Red', result1: 0, result2: 0 },
        { id: 5, time: '12:50', team1: 'Woft Musta', team2: 'Viikingit Red', result1: 0, result2: 0 },
        { id: 6, time: '13:40', team1: 'HIFK Red', team2: 'HJK Black', result1: 0, result2: 0 }
      ],
      u8lohkob: [
        { id: 1, time: '10:00', team1: 'Wolf Keltainen', team2: 'HIFK White', result1: 0, result2: 0 },
        { id: 2, time: '10:40', team1: 'HJK Blue', team2: 'Viikingit White', result1: 0, result2: 0 },
        { id: 3, time: '11:20', team1: 'Wolf Keltainen', team2: 'HJK Blue', result1: 0, result2: 0 },
        { id: 4, time: '12:10', team1: 'HIFK White', team2: 'Viikingit White', result1: 0, result2: 0 },
        { id: 5, time: '12:50', team1: 'Wolf Keltainen', team2: 'Viikingit White', result1: 0, result2: 0 },
        { id: 6, time: '13:40', team1: 'HIFK White', team2: 'HJK Blue', result1: 0, result2: 0 }
      ],
      u7: [
        { id: 1, time: '10:00', team1: 'Wolf', team2: 'Haki White', result1: 0, result2: 0 },
        { id: 2, time: '10:40', team1: 'HIFK White', team2: 'HIFK Blue', result1: 0, result2: 0 },
        { id: 3, time: '11:20', team1: 'Wolf', team2: 'HIFK White', result1: 0, result2: 0 },
        { id: 4, time: '12:10', team1: 'Haki White', team2: 'HIFK Blue', result1: 0, result2: 0 },
        { id: 5, time: '12:50', team1: 'Wolf ', team2: 'HIFK Blue', result1: 0, result2: 0 },
        { id: 6, time: '13:40', team1: 'Haki White', team2: 'HIFK White', result1: 0, result2: 0 },
        
      ]
  });

  const [teams, setTeams] = useState({
    u8lohkoa: ["Woft Musta", "HIFK Red", "HJK Black", "Viikingit Red"],
    u8lohkob: ["Wolf Keltainen", "HIFK White", "HJK Blue", "Viikingit White"],
    u7: ["Wolf", "Haki White", "HIFK White", "HIFK Blue"]
  });

  const [editedResults, setEditedResults] = useState({});
  const [editingGameId, setEditingGameId] = useState(null);

  useEffect(() => {
    const storedGames = localStorage.getItem('sunnuntaiGames');
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
      localStorage.setItem('sunnuntaiGames', JSON.stringify(updatedGames));
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

  return (
    <div>
      {Object.keys(games).map((groupId) => (
        <div key={groupId}>
          <hr />
          <h3 className='group'>{formatGroupName(groupId)}</h3>

          <div className="team-list">
            {teams[groupId].map((team, index) => (
              <React.Fragment key={index}>
                <span className="team">{team}</span>
                {index !== teams[groupId].length - 1 && <hr className="team-divider" />}
              </React.Fragment>
            ))}
          </div>
          <div>
            <h3>Pelit</h3>
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
    </div>
  );
};

export default Sunnuntai;
