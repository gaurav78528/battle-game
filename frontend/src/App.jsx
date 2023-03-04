import React from "react";
import "./styles/app.css";
import AllRoutes from "./Routes/AllRoutes";
import Chat from "./Pages/Chat";

const App = () => {
  return (
    <>
      <AllRoutes />
      <Chat />
    </>
  );
};

export default App;
