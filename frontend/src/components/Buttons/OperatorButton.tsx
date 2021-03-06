import React, { useContext } from "react";
import { ActionType } from "../../contexts/Actions";
import {
  CalculatorContext,
  CalculatorDispatchContext,
} from "../../contexts/CalculatorContext";

export default function OperatorButton({ label }: { label: string }) {
  const state = useContext(CalculatorContext);
  const dispatch = useContext(CalculatorDispatchContext);

  function handleClick(e: any) {
    e.preventDefault();
    dispatch({
      type: ActionType.OPERATOR_PRESSED,
      payload: label,
    });
  }

  if (
    state.leftOperand.length !== 0 &&
    state.operator === label &&
    state.rightOperand.length === 0
  ) {
    return (
      <button
        className="bg-white text-orange-500 text-center font-bold py-2 px-4 mx-1 my-1 rounded col-span-1"
        onClick={handleClick}
      >
        {label}
      </button>
    );
  } else {
    return (
      <button
        className="bg-orange-500 hover:bg-orange-600 text-white text-center font-bold py-2 px-4 mx-1 my-1 rounded col-span-1"
        onClick={handleClick}
      >
        {label}
      </button>
    );
  }
}
