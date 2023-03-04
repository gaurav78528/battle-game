import { useDisclosure } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import { Loginfunction } from "../Redux/AuthReducer/action";
const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [openLogin, setOpenLogin] = useState(false);
  const dispatch = useDispatch();

  const { isAuth, isError, isLoading } = useSelector((state) => {
    return {
      isAuth: state.isAuth,
      isError: state.isError,
      isLoading: state.isLoading,
    };
  });

  const handleOpenLogin = () => {
    setOpenLogin(false);
  };

  const handleLogout = () => {
    dispatch(
      Loginfunction({
        email: "null@g.com",
        password: "null",
      })
    );

    location.reload();
  };
  console.log(isAuth);
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
          {!isAuth && (
            <li onClick={onOpen}>
              <Link>Register</Link>
            </li>
          )}

          {!isAuth && (
            <li onClick={() => setOpenLogin(true)}>
              <Link>Login</Link>
            </li>
          )}

          {isAuth && (
            <li onClick={handleLogout}>
              <span>Logout</span>
            </li>
          )}
        </ul>
      </div>
      <Register isOpen={isOpen} onOpen={onOpen} onClose={onClose} />

      <Login isOpen={openLogin} onClose={handleOpenLogin} />
    </>
  );
};

export default Navbar;
