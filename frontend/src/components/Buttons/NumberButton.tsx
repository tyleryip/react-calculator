import React, { useContext } from "react";
import { ActionType } from "../../contexts/Actions";
import {
  CalculatorContext,
  CalculatorDispatchContext,
} from "../../contexts/CalculatorContext";

export default function NumberButton({ label }: { label: string }) {
  const state = useContext(CalculatorContext);
  const dispatch = useContext(CalculatorDispatchContext);

  function handleClick(e: any) {
    e.preventDefault();
    if (state.operator.length === 0) {
      // If there is no operator yet, we continue appending to the left operand.
      dispatch({
        type: ActionType.LEFT_OPERAND_APPENDED,
        payload: label,
      });
    } else {
      // If there is an operator, we append to the right operand.
      dispatch({
        type: ActionType.RIGHT_OPERAND_APPENDED,
        payload: label,
      });
    }
  }

  // TODO: Figure out why this button won't span 2 columns lol
  if (label === "0") {
    return (
      <button
        className="bg-zinc-700 hover:bg-zinc-800 text-white font-bold py-2 px-4 mx-1 my-1 rounded col-span-2"
        onClick={handleClick}
      >
        {label}
      </button>
    );
  } else {
    return (
      <button
        className="bg-zinc-700 hover:bg-zinc-800 text-white font-bold py-2 px-4 mx-1 my-1 rounded col-span-1"
        onClick={handleClick}
      >
        {label}
      </button>
    );
  }
}
