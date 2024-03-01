import React from "react";

import {
  Flex,
  IconButton,
  Link,
  Tooltip,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaWhatsapp, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const iconColor = useColorModeValue("gray.600", "gray.300");
  return (
    <>
      <Flex
        as="footer"
        align="center"
        justify="center"
        py={4}
        bg={useColorModeValue("gray.200", "gray.800")}
      >
        <Tooltip label="WhatsApp" placement="top">
          <Link
            href="https://chat.whatsapp.com/Dgn6sgWQsnU2gPUAypJKvi"
            isExternal
            mx={2}
          >
            <IconButton
              icon={<FaWhatsapp />}
              aria-label="WhatsApp"
              variant="ghost"
              color={iconColor}
              fontSize="20px"
              _hover={{ color: "green.500" }}
            />
          </Link>
        </Tooltip>

        <Tooltip label="Instagram" placement="top">
          <Link
            href="https://www.instagram.com/wolves_esports_01?igsh=MW1raTJ5dWZ4Z3dtNg=="
            isExternal
            mx={2}
          >
            <IconButton
              icon={<FaInstagram />}
              aria-label="Instagram"
              variant="ghost"
              color={iconColor}
              fontSize="20px"
              _hover={{ color: "pink.500" }}
            />
          </Link>
        </Tooltip>

        <Tooltip label="YouTube" placement="top">
          <Link
            href="https://www.youtube.com/@EMPIREGAMING582"
            isExternal
            mx={2}
          >
            <IconButton
              icon={<FaYoutube />}
              aria-label="YouTube"
              variant="ghost"
              color={iconColor}
              fontSize="20px"
              _hover={{ color: "red.500" }}
            />
          </Link>
        </Tooltip>
        <div className="container">
          <p className="animated-text">@Syed Technical</p>
        </div>
      </Flex>
    </>
  );
};

export default Footer;
