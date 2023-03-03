import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/style.css";
import { Heading } from "@chakra-ui/react";

const GameOver = () => {
  const navigate = useNavigate();
  return (
    <div className="container center">
      <Heading as={"h1"} szie="md">
        Game Over
      </Heading>
      <button className="btn bg-btn" onClick={() => navigate("/play-game")}>
        Play Again
      </button>
    </div>
  );
};

export default GameOver;
