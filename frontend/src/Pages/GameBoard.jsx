import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { opponentStats, playerStats } from "../character";
import BattleMenu from "../Components/BattleMenu";
import "../styles/style.css";
import PlayerSummary from "./../Components/PlayerSummary";
import { useToast, Heading } from "@chakra-ui/react";

const GameBoard = () => {
  const [playerHealth, setPlayerHealth] = useState(playerStats.maxHealth);
  const [opponentHealth, setopponentHealth] = useState(opponentStats.maxHealth);
  const [playerTurn, setPlayerTurn] = useState(true);
  const [winner, setWinner] = useState("");
  const [slideLeft, setSlideLeft] = useState(false);
  const [slideRight, setSlideRight] = useState(false);

  const navigate = useNavigate();
  const toast = useToast();

  console.log(playerHealth);
  console.log(winner);

  useEffect(() => {
    if (playerTurn) {
      toast({
        title: `It's ${playerStats.name} turn`,
        position: "top",
        duration: 2000,
        isClosable: true,
      });
    } else {
      toast({
        title: `It's ${opponentStats.name} turn`,
        position: "top",
        duration: 2000,
        isClosable: true,
      });
    }
  }, [playerTurn]);

  const handleAttack = () => {
    setSlideLeft(true);
    if (playerTurn) {
      setopponentHealth((prevHealth) => prevHealth - 10);
    }

    if (!playerTurn) {
      setSlideLeft(false);
      setSlideRight(true);
      setPlayerHealth((prevHealth) => prevHealth - 10);
    }
    setPlayerTurn(!playerTurn);
    if (playerHealth <= 0) {
      setWinner(opponentStats.name);

      // alert(winner);
    } else if (opponentHealth <= 0) {
      setWinner(playerStats.name);
      // alert(winner);
    }
  };

  const handleMagic = () => {
    let randomHealth = Math.floor(Math.random() * 100);
    if (playerTurn) {
      setopponentHealth((prevHealth) => prevHealth - randomHealth);
    }
    if (!playerTurn) {
      setPlayerHealth((prevHealth) => prevHealth - randomHealth);
    }
    setPlayerTurn(!playerTurn);
    if (playerHealth <= 0) {
      setWinner(opponentStats.name);
    } else if (opponentHealth <= 0) {
      setWinner(playerStats.name);
    }
  };

  if (winner) {
    toast({
      title: "Congratluations.",
      description: `Hurray ${winner} Wins`,
      status: "success",
      duration: 3000,
      isClosable: true,
      position: "top",
    });
    navigate("/game-over");
  }

  const handleHeal = () => {
    if (playerTurn) {
      setPlayerHealth((prevHealth) => prevHealth + 50);
    }
    if (!playerTurn) {
      setopponentHealth((prevHealth) => prevHealth + 50);
    }
  };
  return (
    <div className="game-board-container">
      <Heading as={"h1"} szie="md" className="game-heading">
        Game Board
      </Heading>
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
              playerTurn={playerTurn}
            />
          </div>
        </div>
        <div className="players-container">
          <h1 className="match-header">
            {playerStats.name} vs {opponentStats.name}
          </h1>
          <div className="players-board">
            <div className="player-box">
              <div
                className={`player-bullet ${slideLeft && "player-bullet-left"}`}
              ></div>
              <div
                className={`player-bullet ${
                  slideRight && "player-bullet-right"
                }`}
              ></div>
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
              playerTurn={playerTurn}
            />
          </div>
        </div>
        <div className="option">
          <BattleMenu
            onAttack={handleAttack}
            onMagic={handleMagic}
            onHeal={handleHeal}
          />
        </div>
      </div>
    </div>
  );
};

export default GameBoard;
