import React, { useContext } from "react";
import { ActionType } from "../../contexts/Actions";
import { CalculatorDispatchContext } from "../../contexts/CalculatorContext";

export default function NumberButton({ label }: { label: string }) {
  const dispatch = useContext(CalculatorDispatchContext);

  function handleClick(e: any) {
    e.preventDefault();
    dispatch({
      type: ActionType.NUMBER_PRESSED,
      payload: label,
    });
  }

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
