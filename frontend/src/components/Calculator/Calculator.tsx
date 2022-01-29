import React from "react";
import CalculatorContainer from "../CalculatorContainer/CalculatorContainer";
import CalculatorWindow from "../CalculatorWindow/CalculatorWindow";
import ButtonContainer from "../ButtonContainer/ButtonContainer";

export default function Calculator() {
  return (
    <CalculatorContainer>
      <div className="grid place-items-center h-screen">
        <div className="rounded border-2 border-black py-2 px-2 bg-slate-400 h-72 w-64">
          <CalculatorWindow />
          <ButtonContainer />
        </div>
      </div>
    </CalculatorContainer>
  );
}
