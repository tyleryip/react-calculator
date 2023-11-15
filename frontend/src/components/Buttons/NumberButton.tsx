import React from "react";
import { useAppDispatch } from "../../store/hooks";
import { pressNumber } from "../../store/slices/calculatorSlice";

export default function NumberButton({ label }: { label: string }) {
  const dispatch = useAppDispatch();

  function handleClick(e: any) {
    e.preventDefault();
    dispatch(pressNumber(label));
  }

  if (label === "0") {
    return (
      <button
        className="bg-zinc-700 hover:bg-zinc-800 text-white text-center font-bold py-2 px-4 mx-1 my-1 rounded col-span-2"
        onClick={handleClick}
      >
        {label}
      </button>
    );
  } else {
    return (
      <button
        className="bg-zinc-700 hover:bg-zinc-800 text-white text-center font-bold py-2 px-4 mx-1 my-1 rounded col-span-1"
        onClick={handleClick}
      >
        {label}
      </button>
    );
  }
}
