import React from "react";
import Bar from "./Bar";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const PlayerSummary = ({
  main,
  name,
  level,
  heal,
  health,
  playerTurn,
  maxHealth,
}) => {
  return (
    <>
      <div
        className="player-info-container"
        style={{
          border: main && playerTurn && "2px solid green",
          // (!main && playerTurn && "2px solid red"),
        }}
      >
        <div className="player-info">
          <p>{name}</p>
          <p>
            LVL: <span>{level}</span>
          </p>
        </div>
        <div className="health-bar">
          <Bar label="HP" health={health} maxHealth={maxHealth} />
        </div>
        <div className="heal-container">
          <AiFillHeart color="red"  />
        </div>
      </div>
    </>
  );
};

export default PlayerSummary;
