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
import { BrowserRouter, Route, Routes } from "react-router-dom";

initializeIcons();

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="App" style={{ paddingTop: 20 }}>
               <div className='smartphone'>
              <iframe src="./test" style={{ height: 640, width: 360, border: 0}}></iframe>
        </div>
            </div>
          }
        />
        <Route
          path="/test"
          element={
              <Provider store={poolStore}>
                <SmartphoneContent/>
              </Provider>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
