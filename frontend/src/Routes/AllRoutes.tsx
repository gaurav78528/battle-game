import React from "react";
import { Route, Routes } from "react-router-dom";
import GameBoard from "../Pages/GameBoard";
import GameOver from "../Pages/GameOver";
import Home from "../Pages/Home";
import NotFound from "../Pages/NotFound";

const AllRoutes = ():React.ReactNode => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/play-game" element={<GameBoard />} />
      <Route path="/game-over" element={<GameOver />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AllRoutes;
