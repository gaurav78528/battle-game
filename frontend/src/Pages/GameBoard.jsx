import React, { useState } from "react";
import { opponentStats, playerStats } from "../character";
import "../styles/style.css";
import PlayerSummary from "./../Components/PlayerSummary";
const GameBoard = () => {
  const [playerHealth, setPlayerHealth] = useState(playerStats.maxHealth);
  const [opponentHealth, setOpponentHealth] = useState(opponentStats.maxHealth);

  return (
    <div className="game-board-container">
      <h1 className="game-heading">Game Board</h1>
      <div className="game-board">
        <div className="opponent">
          <div className="summary">
            <PlayerSummary
              main={false}
              health={opponentHealth}
              name={opponentStats.name}
              level={opponentStats.level}
              maxHealth={opponentStats.maxHealth}
            />
          </div>
        </div>
        <div className="user">
          <div className="summary">
            <PlayerSummary
              main={true}
              health={25}
              name={playerStats.name}
              level={playerStats.level}
              maxHealth={playerStats.maxHealth}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameBoard;
