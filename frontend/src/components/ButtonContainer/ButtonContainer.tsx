import React from "react";
import { ButtonLabels } from "../../constants/Constants";

export default function ButtonContainer() {
  return (
    <div className="rounded border-black border-2">
      {ButtonLabels.map((label) => {
        return (
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-1 my-1 rounded">
            {label}
          </button>
        );
      })}
    </div>
  );
}
