import React, { useState, useEffect } from "react";
import { AiFillApple } from "react-icons/ai"; // FcGoogle
import { FcGoogle } from "react-icons/fc";
import { AiFillFacebook } from "react-icons/ai";
import { useDispatch, shallowEqual, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { SignUpFunction } from "../Redux/AuthReducer/action";
import { ArrowBackIcon, ArrowDownIcon } from "@chakra-ui/icons";

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
  Select,
  Text,
  useMediaQuery,
  useToast,
  InputRightElement,
  InputGroup,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";

export default function Register({ isOpen, onOpen, onClose }) {
  const [isLoading, setIsLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [name, setName] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toaster = useToast();
  const [show, setShow] = useState(false);
  const { userData, successfullyCreated, createAccountError } = useSelector(
    (state) => {
      return {
        userData: state.userData,
        successfullyCreated: state.successfullyCreated,
        createAccountError: state.createAccountError,
      };
    },
    shallowEqual
  );
  const isEmail = (email) =>
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

  const lowercaseReg = (password) => /(?=.*?[a-z])/i.test(password);
  const digitsReg = (password) => /(?=.*?[0-9])/i.test(password);
  const specialCharReg = (password) => /(?=.*?[#?!@$%^&*-])/i.test(password);
  const minLengthReg = (password) => /.{8,}/i.test(password);

  useEffect(() => {
    if (successfullyCreated) {
      toaster({
        title: `Your Account Has Created `,
        duration: 2000,
        position: "top",
        status: "success",
        isClosable: true,
      });
      setTimeout(() => {
        toaster({
          title: `You can Log in `,
          duration: 2000,
          position: "top",
          status: "success",
          isClosable: true,
        });
      }, 2000);
    }
  }, [successfullyCreated]);

  useEffect(() => {
    if (createAccountError) {
      toaster({
        title: `Something Error Occourd !`,
        status: "error",
        duration: 2000,
        position: "top",
        isClosable: true,
      });
    }
  }, [createAccountError]);

  function SendSignInRequest() {
    if (name === "" || email == "" || gender == "" || password == "") {
      toaster({
        title: `Please Enter all the feilds !`,
        status: "error",
        duration: 2000,
        position: "top",
        isClosable: true,
      });
    } else if (!isEmail(email)) {
      toaster({
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
      toaster({
        title: `Password length should greater than 8 and contains
        english letter and one speacial charcter ,number!`,
        status: "error",
        duration: 3000,
        position: "top",
        isClosable: true,
      });
    } else {
      dispatch(
        SignUpFunction({
          name: name,
          email: email,
          gender: gender,
          password: password,
        })
      );
      setEmail("");
      setPassword("");
      setName("");
      setGender("");
    }
  }
  const handleClick = () => setShow(!show);
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create an account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl
              // w={isLargerThan992 ? "24%" : "60%"}
              borderRadius="lg"
              p={"3"}
              cursor="pointer"
              mt={5}
              isRequired
            >
              <Input
                onChange={(e) => setEmail(e.target.value)}
                placeholder=" Email address"
                w={"100%"}
                h={"40px"}
                value={email}
                border={`2px solid`}
                type={"email"}
                id="email"
              />
              <br />
              <br />

              <Input
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                value={name}
                w={"100%"}
                h={"40px"}
                border={`2px solid`}
                mb={"8px"}
                id="userName"
              />

              <br />
              <Select
                onChange={(e) => setGender(e.target.value)}
                placeholder="Gender"
                w={"100%"}
                h={"40px"}
                border={`2px solid`}
                type={"text"}
                mb={"8px"}
                id="userName"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Others">Other</option>
              </Select>

              <FormLabel fontSize="0.7rem">
                Password must contains a-z,1-9,symbol(@,$) and lengh should be
                greater than 8
              </FormLabel>

              <InputGroup>
                <Input
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="password"
                  w={"100%"}
                  h={"40px"}
                  value={password}
                  border={`2px solid`}
                  type={show ? "text" : "password"}
                  mb={"8px"}
                  id="password"
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleClick}>
                    {show ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <button
              onClick={SendSignInRequest}
              className="btn"
              style={{ background: "rgba(0,0,0,0.2)" }}
            >
              Create Account
            </button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
