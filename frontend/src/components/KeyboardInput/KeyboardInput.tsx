import React, { useEffect } from "react";
import {
  NumberButtonLabels,
  OperatorButtonLabels,
} from "../../constants/Constants";
import { useAppDispatch } from "../../store/hooks";
import {
  pressClear,
  pressDecimal,
  pressEquals,
  pressNumber,
  pressOperator,
  pressPercent,
} from "../../store/slices/calculatorSlice";

// The KeyboardInput component does not render anything to the DOM but handles keyboard inputs.
export default function KeyboardInput() {
  const dispatch = useAppDispatch();

  const handleKeyUp = (event: any) => {
    // Convert the keypress to lowercase to handle things like "c", "x", "backspace", "delete" reliably
    const key: string = event.key.toLowerCase();

    if (NumberButtonLabels.includes(key)) {
      dispatch(pressNumber(key));
    } else if (OperatorButtonLabels.includes(key)) {
      // Handles "+", "-"
      dispatch(pressOperator(key));
    } else if (key === "/") {
      dispatch(pressOperator("÷"));
    } else if (key === "x" || key === "*") {
      dispatch(pressOperator("x"));
    } else if (key === ".") {
      dispatch(pressDecimal());
    } else if (key === "c" || key === "backspace" || key === "delete") {
      dispatch(pressClear());
    } else if (key === "=" || key === "enter") {
      dispatch(pressEquals());
    } else if (key === "%") {
      dispatch(pressPercent());
    }
    return;
  };

  useEffect(() => {
    // Add an event listener on mount.
    window.addEventListener("keyup", handleKeyUp);

    // Clean up the event listener on unmount.
    return () => {
      window.removeEventListener("keyup", handleKeyUp);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Render a blank or placeholder component.
  return <></>;
}
