import React, { useContext } from "react";
import { ActionType } from "../../contexts/Actions";
import {
  CalculatorContext,
  CalculatorDispatchContext,
} from "../../contexts/CalculatorContext";

export default function OperatorButton({ label }: { label: string }) {
  const state = useContext(CalculatorContext);
  const dispatch = useContext(CalculatorDispatchContext);

  // TODO: Need to update this handler to deal with clicking an operator after a right operand is populated
  function handleClick(e: any) {
    e.preventDefault();
    dispatch({
      type: ActionType.OPERATOR_SET,
      payload: label,
    });
  }

  if (state.operator.length !== 0 && state.operator === label) {
    return (
      <button
        className="bg-white text-orange-500 font-bold py-2 px-4 mx-1 my-1 rounded col-span-1"
        onClick={handleClick}
      >
        {label}
      </button>
    );
  } else {
    return (
      <button
        className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 mx-1 my-1 rounded col-span-1"
        onClick={handleClick}
      >
        {label}
      </button>
    );
  }
}
