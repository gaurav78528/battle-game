import React from "react";
import "../styles/style.css";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="container center">
      <h1>Welcome to Battle Game</h1>
      <button className="btn" onClick={() => navigate("/play-game")}>
        Start Game
      </button>
    </div>
  );
};

export default Home;
