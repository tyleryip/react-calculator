import React, { useContext } from "react";
import { CalculatorContext } from "../../contexts/CalculatorContext";

export default function CalculatorWindow() {
  const state = useContext(CalculatorContext);

  return (
    <div className="rounded border-black border-2 bg-white">
      <p className="text-right">
        {state.rightOperand.length === 0 && state.operator.length === 1
          ? state.leftOperand
          : state.rightOperand}
      </p>
    </div>
  );
}
