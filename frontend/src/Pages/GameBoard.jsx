import React, { useEffect, useState } from "react";
import { opponentStats, playerStats } from "../character";
import BattleMenu from "../Components/BattleMenu";
import { useBattleSequence } from "../hooks/useBattleSequence";
import { useOpponentPlayer } from "../hooks/useOpponentPlayer";
import "../styles/style.css";
import PlayerSummary from "./../Components/PlayerSummary";
import { attack } from "./../helpers/helpers";

const GameBoard = () => {
  // const [sequence, setSequence] = useState({});
  // const {
  //   turn,
  //   inSequence,
  // playerHealth,
  // opponentHealth,
  //   playerAnimation,
  //   opponentAnimation,
  // } = useBattleSequence(sequence);
  // const oppPlayer = useOpponentPlayer(turn);

  const [playerHealth, setPlayerHealth] = useState(playerStats.maxHealth);
  const [opponentHealth, setopponentHealth] = useState(opponentStats.maxHealth);
  const [playerTurn, setPlayerTurn] = useState(true);
  const [winner, setWinner] = useState("");
  console.log(winner);
  useEffect(() => {
    if (playerTurn) {
      alert(`It's ${playerStats.name} turn`);
    } else {
      alert(`It's ${opponentStats.name} turn`);
    }
  }, [playerTurn]);

  // useEffect(() => {
  //   if (oppPlayer && turn === 1 && !inSequence) {
  //     setSequence({ turn, mode: oppPlayer });
  //   }
  // }, [turn, oppPlayer, inSequence]);

  const handleAttack = () => {
    console.log("clicked");
    if (playerTurn) {
      setopponentHealth((prevHealth) => prevHealth - 10);
      console.log(opponentHealth);
    }

    if (!playerTurn) {
      setPlayerHealth((prevHealth) => prevHealth - 10);
      console.log(playerHealth);
    }
    setPlayerTurn(!playerTurn);
  };

  const handleMagic = () => {
    let randomHealth = Math.floor(Math.random() * 100);
    console.log(randomHealth);
    if (playerTurn) {
      setopponentHealth((prevHealth) => prevHealth - randomHealth);
      console.log(opponentHealth);
    }
    if (!playerTurn) {
      setPlayerHealth((prevHealth) => prevHealth - randomHealth);
      console.log(playerHealth);
    }
    setPlayerTurn(!playerTurn);
  };

  if (playerHealth <= 0) {
    setWinner(opponentStats.name);

    // alert(winner);
  } else if (opponentHealth <= 0) {
    setWinner(playerStats.name);
    // alert(winner);
  }

  const handleHeal = () => {};
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
              heal={opponentStats.heal}
            />
          </div>
        </div>
        <div className="players-container">
          <h1 className="match-header">
            {playerStats.name} vs {opponentStats.name}
          </h1>
          <div className="players-board">
            <div className="player-box">
              <div className="player-bullet"></div>
              <img
                src={playerStats.img}
                alt={playerStats.name}
                className="player-animate"
              />
            </div>
            <div className="opponent-box">
            <div className="opponent-bullet"></div>
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
              heal={playerStats.heal}
            />
          </div>
        </div>
        <div className="option">
          <BattleMenu
            onAttack={handleAttack}
            onMagic={handleMagic}
            onHeal={handleHeal}
            // onAttack={() => setSequence({ turn, mode: "attack" })}
            // onMagic={() => setSequence({ turn, mode: "magic" })}
            // onHeal={() => setSequence({ turn, mode: "heal" })}
          />
        </div>
      </div>
    </div>
  );
};

export default GameBoard;
