import { useDisclosure } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import Register from "../Pages/Register";
const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <div className="navbar">
        <h1>Battle Game</h1>
        <ul className="nav-items">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/play-game">Play</Link>
          </li>
          <li onClick={onOpen}>
            <Link>Register</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
      <Register isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
    </>
  );
};

export default Navbar;
