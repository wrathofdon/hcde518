import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  Box,
  AppBar,
  Typography,
  Toolbar,
  IconButton,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { initializeIcons } from "@fluentui/react";
import { Provider } from "react-redux";
import { poolStore } from "./redux/poolStore";
import SmartphoneContent from "./App/SmartphoneContent";

initializeIcons();

function App() {
  return (
    <Provider store={poolStore}>
      <SmartphoneContent/>
    </Provider>
  );
}

export default App;
