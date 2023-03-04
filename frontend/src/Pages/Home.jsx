import React from "react";
import "../styles/style.css";
import { useNavigate } from "react-router-dom";
import { Heading } from "@chakra-ui/react";
import Navbar from "../Components/Navbar";
const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home-bg">
      <Navbar />
      <div className="container center">
        <Heading as={"h1"} size="lg" color="papayawhip">
          Welcome to Battle Game
        </Heading>
        <button className="btn" onClick={() => navigate("/play-game")}>
          Start Game
        </button>
      </div>
    </div>
  );
};

export default Home;
