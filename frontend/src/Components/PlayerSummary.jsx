import React from "react";
import Bar from "./Bar";

const PlayerSummary = ({ main, name, level, health, maxHealth }) => {
  return (
    <div
      className="player-info-container"
      style={{ border: main ? "2px solid green" : "2px solid red" }}
    >
      <div className="player-info">
        <p>{name}</p>
        <p>
          LVL: <span>44</span>
        </p>
      </div>
      <div className="health-bar">
        <Bar label="HP" health={health} maxHealth={maxHealth} />
      </div>
    </div>
  );
};

export default PlayerSummary;
