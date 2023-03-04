import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/style.css";
import { Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const GameOver = () => {
  const navigate = useNavigate();
  return (
    <div className="game-over-bg">
      <div className="container center">
        <Heading as={"h1"} szie="md" color="papayawhip">
          Game Over
        </Heading>
        <button className="btn" onClick={() => navigate("/play-game")}>
          Play Again
        </button>
        <Link to="/" style={{ color: "white" }}>
          Home
        </Link>
      </div>
    </div>
  );
};

export default GameOver;
