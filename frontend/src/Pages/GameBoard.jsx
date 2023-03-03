import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { opponentStats, playerStats } from "../character";
import BattleMenu from "../Components/BattleMenu";
import { useBattleSequence } from "../hooks/useBattleSequence";
import { useOpponentPlayer } from "../hooks/useOpponentPlayer";
import "../styles/style.css";
import PlayerSummary from "./../Components/PlayerSummary";
import { attack } from "./../helpers/helpers";
import { useToast, Heading } from "@chakra-ui/react";

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

  // useEffect(() => {
  //   if (oppPlayer && turn === 1 && !inSequence) {
  //     setSequence({ turn, mode: oppPlayer });
  //   }
  // }, [turn, oppPlayer, inSequence]);

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

                // style={{
                //   transform: `${playerBullet} ? ${"translateX(900px)"}: ${"translateX(0px)"}`,
                // }}
              ></div>
              <div
                className={`player-bullet ${
                  slideRight && "player-bullet-right"
                }`}
                // style={{
                //   transform: `${playerBullet} ? ${"translateX(900px)"}: ${"translateX(0px)"}`,
                // }}
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
