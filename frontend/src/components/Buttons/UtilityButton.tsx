import React, { useContext } from "react";
import { ActionType } from "../../contexts/Actions";
import {
  CalculatorContext,
  CalculatorDispatchContext,
} from "../../contexts/CalculatorContext";

export default function UtilityButton({ label }: { label: string }) {
  const state = useContext(CalculatorContext);
  const dispatch = useContext(CalculatorDispatchContext);

  function handleClick(e: any) {
    e.preventDefault();
    switch (label) {
      case "C":
        dispatch({
          type: ActionType.WINDOW_CLEARED,
        });
        break;

      // TODO: Implement a pre-pend action
      case "±":
        break;

      case "%":
        break;

      case ".":
        if (state.operator.length === 0) {
          dispatch({
            type: ActionType.LEFT_OPERAND_APPENDED,
            payload: ".",
          });
        } else {
          dispatch({
            type: ActionType.RIGHT_OPERAND_APPENDED,
            payload: ".",
          });
        }
        break;

      case "=":
        dispatch({ type: ActionType.ANSWER_CALCULATED });
        break;

      default:
        break;
    }
  }

  if (label === ".") {
    return (
      <button
        className="bg-zinc-700 hover:bg-zinc-800 text-white font-bold py-2 px-4 mx-1 my-1 rounded col-span-1"
        onClick={handleClick}
      >
        {label}
      </button>
    );
  } else if (label === "C" || label === "±" || label === "%") {
    return (
      <button
        className="bg-gray-400 hover:bg-gray-500 text-neutral-900 font-bold py-2 px-4 mx-1 my-1 rounded col-span-1"
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
