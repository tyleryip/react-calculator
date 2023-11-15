import React from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  press_operator,
  selectLeftOperand,
  selectOperator,
  selectRightOperand,
} from "../../store/slices/calculatorSlice";

export default function OperatorButton({ label }: { label: string }) {
  const leftOperand = useAppSelector(selectLeftOperand);
  const rightOperand = useAppSelector(selectRightOperand);
  const operator = useAppSelector(selectOperator);
  const dispatch = useAppDispatch();

  function handleClick(e: any) {
    e.preventDefault();
    dispatch(press_operator(label));
  }

  if (
    leftOperand.length !== 0 &&
    operator === label &&
    rightOperand.length === 0
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
