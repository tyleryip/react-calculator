import React from "react";
import {
  AllButtonLabels,
  NumberButtonLabels,
  OperatorButtonLabels,
} from "../../constants/Constants";
import NumberButton from "../Buttons/NumberButton";
import OperatorButton from "../Buttons/OperatorButton";
import UtilityButton from "../Buttons/UtilityButton";

export default function ButtonContainer() {
  return (
    <div className="grid grid-cols-4 px-2 py-2">
      {AllButtonLabels.map((label) => {
        if (NumberButtonLabels.includes(label)) {
          return <NumberButton key={label} label={label} />;
        } else if (OperatorButtonLabels.includes(label)) {
          return <OperatorButton key={label} label={label} />;
        } else {
          return <UtilityButton key={label} label={label} />;
        }
      })}
    </div>
  );
}
