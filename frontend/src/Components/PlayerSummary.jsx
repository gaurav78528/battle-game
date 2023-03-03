import React from "react";
import Bar from "./Bar";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

import { playerStats } from "./../character";

const PlayerSummary = ({ main, name, level, heal, health, maxHealth }) => {
  return (
    <>
      <div
        className="player-info-container"
        style={{
          border: main ? "2px solid green" : "2px solid red",
          // background: `${health <= 30 && "rgba(10,0,0,0.5)"}`,
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
          <AiFillHeart color="red" />
          <AiFillHeart color="red" />
          <AiFillHeart color="red" />
          <AiFillHeart color="red" />
        </div>
      </div>
    </>
  );
};

export default PlayerSummary;
