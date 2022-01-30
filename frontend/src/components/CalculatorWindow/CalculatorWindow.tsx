import React, { useContext } from "react";
import { CalculatorContext } from "../../contexts/CalculatorContext";

export default function CalculatorWindow() {
  const state = useContext(CalculatorContext);

  // TODO: Whatever is displayed should be truncated so the value does not go off the screen.
  return (
    <div className="rounded border-black border-2 bg-white my-1 mx-2 h-12">
      <p className="text-right text-xl px-2 py-2">
        {state.rightOperand.length === 0
          ? state.leftOperand
          : state.rightOperand}
      </p>
    </div>
  );
}
