import React from "react";
import "../styles/style.css";
import { useNavigate } from "react-router-dom";
import { Heading } from '@chakra-ui/react';
const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="container center">
      <Heading as={"h1"} szie="md">
        Welcome to Battle Game
      </Heading>
      <button className="btn" onClick={() => navigate("/play-game")}>
        Start Game
      </button>
    </div>
  );
};

export default Home;
