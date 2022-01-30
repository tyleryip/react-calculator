import React, { useContext } from "react";
import { ActionType } from "../../contexts/Actions";
import { CalculatorDispatchContext } from "../../contexts/CalculatorContext";

export default function UtilityButton({ label }: { label: string }) {
  const dispatch = useContext(CalculatorDispatchContext);

  function handleClick(e: any) {
    e.preventDefault();
    switch (label) {
      case "C":
        dispatch({
          type: ActionType.CLEAR_PRESSED,
        });
        break;

      case "±":
        dispatch({
          type: ActionType.PLUS_MINUS_PRESSED,
        });
        break;

      case "%":
        dispatch({
          type: ActionType.PERCENT_PRESSED,
        });
        break;

      case ".":
        dispatch({
          type: ActionType.DECIMAL_PRESSED,
          payload: ".",
        });
        break;

      case "=":
        dispatch({ type: ActionType.EQUALS_PRESSED });
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
        className="bg-gray-300 hover:bg-gray-400 text-neutral-900 font-bold py-2 px-4 mx-1 my-1 rounded col-span-1"
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
