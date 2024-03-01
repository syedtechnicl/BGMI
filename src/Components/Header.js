import React from "react";
import { MoonIcon, SettingsIcon } from "@chakra-ui/icons";
import { Button, Center, Stack, useColorMode } from "@chakra-ui/react";
const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Center color={"#fff"} bg={"#1F1C1B"} p={2}>
        <Stack
          spacing={4}
          direction="row"
          align="center"
          justify="space-around"
          px={4}
          w="100%"
        >
          <b>
            {" "}
            <a href="#home">Home</a>
          </b>
          <b>
            {" "}
            <a href="#about">About</a>
          </b>
          <b>
            {" "}
            <a href="#register">Register</a>
          </b>
          <b>
            {" "}
            <a href="#Qrscanner">Payment</a>
          </b>

          <Button onClick={toggleColorMode} colorScheme="whiteAlpha">
            {colorMode === "light" ? <MoonIcon /> : <SettingsIcon />}
          </Button>
        </Stack>
      </Center>
    </>
  );
};

export default Header;
