import React from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  pressClear,
  pressDecimal,
  pressEquals,
  pressPercent,
  pressPlusMinus,
  selectRightOperand,
} from "../../store/slices/calculatorSlice";

export default function UtilityButton({ label }: { label: string }) {
  const rightOperand = useAppSelector(selectRightOperand);
  const dispatch = useAppDispatch();

  function handleClick(e: any) {
    e.preventDefault();
    switch (label) {
      // Both AC and C labels will have the same action handled different by the reducer.
      case "AC":
      case "C":
        dispatch(pressClear());
        break;

      case "±":
        dispatch(pressPlusMinus());
        break;

      case "%":
        dispatch(pressPercent());
        break;

      case ".":
        dispatch(pressDecimal());
        break;

      case "=":
        dispatch(pressEquals());
        break;

      default:
        break;
    }
  }

  // Transform the label "C" into "AC" when needed
  if (rightOperand.length !== 0 && rightOperand !== "0" && label === "AC") {
    label = "C";
  }

  if (label === ".") {
    return (
      <button
        className="bg-zinc-700 hover:bg-zinc-800 text-white text-center font-bold py-2 mx-1 my-1 rounded col-span-1"
        onClick={handleClick}
      >
        {label}
      </button>
    );
  } else if (
    label === "AC" ||
    label === "C" ||
    label === "±" ||
    label === "%"
  ) {
    return (
      <button
        className="bg-gray-300 hover:bg-gray-400 text-neutral-900 text-center font-bold py-2 mx-1 my-1 rounded col-span-1"
        onClick={handleClick}
      >
        {label}
      </button>
    );
  } else {
    return (
      <button
        className="bg-orange-500 hover:bg-orange-600 text-white text-center font-bold py-2 mx-1 my-1 rounded col-span-1"
        onClick={handleClick}
      >
        {label}
      </button>
    );
  }
}
