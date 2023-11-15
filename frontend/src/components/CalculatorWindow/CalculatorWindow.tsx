import React from "react";
import { useAppSelector } from "../../store/hooks";
import {
  selectLeftOperand,
  selectResult,
  selectRightOperand,
} from "../../store/slices/calculatorSlice";

export default function CalculatorWindow() {
  const windowMaxSize = 17;

  const leftOperand = useAppSelector(selectLeftOperand);
  const rightOperand = useAppSelector(selectRightOperand);
  const result = useAppSelector(selectResult);

  let windowValue = "";

  if (result.length !== 0) {
    windowValue = result;
  } else if (rightOperand.length !== 0) {
    windowValue = rightOperand;
  } else {
    windowValue = leftOperand;
  }

  return (
    <div className="rounded border-black border-2 bg-white my-1 mx-2 h-12">
      <p className="text-right text-xl px-2 py-2">
        {windowValue.substring(0, windowMaxSize)}
      </p>
    </div>
  );
}
