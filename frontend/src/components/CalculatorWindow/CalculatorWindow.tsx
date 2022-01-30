import React, { useContext } from "react";
import { CalculatorContext } from "../../contexts/CalculatorContext";

export default function CalculatorWindow() {
  const state = useContext(CalculatorContext);

  return (
    <div className="rounded border-black border-2 bg-white">
      <p className="text-right px-2 py-1 h-8">
        {state.rightOperand.length === 0
          ? state.leftOperand
          : state.rightOperand}
      </p>
    </div>
  );
}
