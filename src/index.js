import React from "react";
import ReactDOM from "react-dom";
// css
import "./Styles/style.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";

// color
ReactDOM.render(
  <>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </>,
  document.querySelector("#root")
);
