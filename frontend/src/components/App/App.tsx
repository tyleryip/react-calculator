import React from "react";
import logo from "./logo.svg";
import "./App.css";
import CalculatorContainer from "../CalculatorContainer/CalculatorContainer";
import CalculatorWindow from "../CalculatorWindow/CalculatorWindow";
import ButtonContainer from "../ButtonContainer/ButtonContainer";

function App() {
  return (
    <CalculatorContainer>
      <CalculatorWindow />
      <ButtonContainer />
    </CalculatorContainer>
  );
}

export default App;
