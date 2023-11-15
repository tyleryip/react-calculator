import React from "react";
import CalculatorWindow from "../CalculatorWindow/CalculatorWindow";
import ButtonContainer from "../ButtonContainer/ButtonContainer";
import KeyboardInput from "../KeyboardInput/KeyboardInput";

export default function Calculator() {
  return (
    <div className="bg-slate-200 grid place-items-center h-screen ">
      <div className="bg-sky-700 rounded-lg border-2 border-black py-2 px-2 h-84 w-64 shadow-2xl">
        <CalculatorWindow />
        <ButtonContainer />
        <KeyboardInput />
      </div>
    </div>
  );
}
