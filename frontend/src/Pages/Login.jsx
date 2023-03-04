import React, { useState, useEffect } from "react";
import { AiFillApple } from "react-icons/ai"; // FcGoogle
import { FcGoogle } from "react-icons/fc";
import { AiFillFacebook } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";


import { ArrowBackIcon } from "@chakra-ui/icons";
import {
  Image,
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  FormHelperText,
  Heading,
  Input,
  Spinner,
  Text,
  useMediaQuery,
  useToast,
  InputGroup,
  InputRightElement,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";

import { Loginfunction } from "../Redux/AuthReducer/action";


export default function Login({isOpen,onClose}) {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
const [password, setPassword] = useState("");

  const toast = useToast();


  const { isAuth, isError, isLoading } = useSelector((state) => {
    return {
      isAuth: state.isAuth,
      isError: state.isError,
      isLoading: state.isLoading,
    };
  });
  const isEmail = (email) =>
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

  const lowercaseReg = (password) => /(?=.*?[a-z])/i.test(password);
  const digitsReg = (password) => /(?=.*?[0-9])/i.test(password);
  const specialCharReg = (password) => /(?=.*?[#?!@$%^&*-])/i.test(password);
  const minLengthReg = (password) => /.{8,}/i.test(password);
  const [loginRequest, setLoginRequest] = useState(0);
  const [isLargerThan992] = useMediaQuery("(min-width: 992px)");


  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  useEffect(() => {
    if (email !== "" && password !== "") {
      if (isAuth) {
        toast({
          title: `LogIn Successfull`,
          status: "success",
          duration: 500,
          position: "top",
          isClosable: true,
        });
  
          onClose()
        setEmail("");
        setPassword("");

      } else {
        if (isError){
          toast({
            title: `Invalid User Details!!!`,
            status: "error",
            duration: 2000,
            position: "top",
            isClosable: true,
          });
        }
        setEmail("");
        setPassword("");
        console.log(isError);
      }
    }
  }, [isAuth, isError, isLoading,loginRequest]);
  

  console.log(isError, isAuth);

  const SendSignInRequest = (e) => {
    e.preventDefault();
    if (email === "" && password === "") {
      toast({
        title: `Please Fill all the feilds !!!`,
        status: "error",
        duration: 1500,
        position: "top",
        isClosable: true,
      });
    } else if (email === "") {
      toast({
        title: `Please give your email !!!`,
        status: "error",
        duration: 1500,
        position: "top",
        isClosable: true,
      });
    } else if (password === "") {
      toast({
        title: `Please give your password !!!`,
        status: "error",
        duration: 1500,
        position: "top",
        isClosable: true,
      });
    } else if (!isEmail(email)) {
      toast({
        title: `Please Enter a valid email !`,
        status: "error",
        duration: 2000,
        position: "top",
        isClosable: true,
      });
    } else if (
    !lowercaseReg(password) ||
      !digitsReg(password) ||
      !specialCharReg(password) ||
      !minLengthReg(password)
    ) {
      toast({
        title: `Password length should greater than 8 and contains
         and one speacial charcter ,lowercase english letter,number!`,
        status: "error",
        duration: 3000,
        position: "top",
        isClosable: true,
      });
    } else {
      dispatch(
        Loginfunction({
          email: email,
          password: password,
        })
      );
      setLoginRequest(loginRequest+1);
    }
  };
  // useEffect(() => {
  //   if (isAuth) {
     
  //   }
  // },[]);

  return (
    <>
    


    <Modal  isOpen={isOpen} onClose={onClose}>
<ModalOverlay/>
<ModalContent>
  <ModalHeader>Create an account</ModalHeader>
  <ModalCloseButton />
  <ModalBody pb={6}>
  <FormControl
            w={isLargerThan992 ? "80%" : "80%"}
            borderRadius="lg"
            p={"3"}
            cursor="pointer"
            mt={5}
            isRequired
          >
            {/* email */}
            <FormLabel htmlFor="email">Enter Email</FormLabel>

            <Input
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email address"
              w={"100%"}
              h={"40px"}
              value={email}
              border={`2px solid`}
              type={"email"}
              id="email"
              required
            />

            <FormHelperText mb={"8px"}>
              We'll never share your email.
            </FormHelperText>

            {/* password */}
            <FormLabel htmlFor="password">Enter Password</FormLabel>
            <InputGroup>
              <Input
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                w={"100%"}
                h={"40px"}
                value={password}
                type={show ? "text" : "password"}
                border={`2px solid`}
                mb={"8px"}
                id="password"
                required
              />

              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
            <Checkbox size={"lg"} defaultChecked>
              Keep me signed in
            </Checkbox>
            <br />


           

          </FormControl>
  </ModalBody>

  <ModalFooter>
    <button
     onClick={SendSignInRequest}
      className="btn"
      style={{ background: "rgba(0,0,0,0.2)" }}
    >
      Login
    </button>
  </ModalFooter>
</ModalContent>
</Modal>

      {/* )
      } */}
    </>
  );
}

