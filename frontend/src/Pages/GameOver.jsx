import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/style.css";

const GameOver = () => {
  const navigate = useNavigate();
  return (
    <div className="container center">
      <h1>Game Over</h1>
      <button className="btn" onClick={() => navigate("/play-game")}>
        Play Again
      </button>
    </div>
  );
};

export default GameOver;
