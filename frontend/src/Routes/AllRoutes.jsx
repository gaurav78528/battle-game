import React from "react";
import { Route, Routes } from "react-router-dom";
import GameBoard from "../Pages/GameBoard";
import GameOver from "../Pages/GameOver";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import NotFound from "../Pages/NotFound";
import Register from "../Pages/Register";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/play-game" element={<GameBoard />} />
      <Route path="/game-over" element={<GameOver />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default AllRoutes;
