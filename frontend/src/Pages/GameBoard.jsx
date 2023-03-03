import React, { useState } from "react";
import { opponentStats, playerStats } from "../character";
import BattleMenu from "../Components/BattleMenu";
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
        <div className="players-container">
          <h1 className="match-header">
            {playerStats.name} vs {opponentStats.name}
          </h1>
          <div className="players-board">
            <div className="playerBox">
              <img
                src={playerStats.img}
                alt={playerStats.name}
                className="player-animate"
              />
            </div>
            <div className="opponentBox">
              <img
                src={opponentStats.img}
                alt={opponentStats.name}
                className="player-animate"
              />
            </div>
          </div>
        </div>
        <div className="user">
          <div className="summary">
            <PlayerSummary
              main={true}
              health={playerHealth}
              name={playerStats.name}
              level={playerStats.level}
              maxHealth={playerStats.maxHealth}
            />
          </div>
        </div>
        <div className="option">
          <BattleMenu
            onAttack={() => console.log("Attack")}
            onMagic={() => console.log("Magic")}
            onHeal={() => console.log("Heal")}
          />
        </div>
      </div>
    </div>
  );
};

export default GameBoard;
