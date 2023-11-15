import React, { useEffect } from "react";
import {
  NumberButtonLabels,
  OperatorButtonLabels,
} from "../../constants/Constants";
import { useAppDispatch } from "../../store/hooks";
import {
  press_clear,
  press_decimal,
  press_equals,
  press_number,
  press_operator,
  press_percent,
} from "../../store/slices/calculatorSlice";

// The KeyboardInput component does not render anything to the DOM but handles keyboard inputs.
export default function KeyboardInput() {
  const dispatch = useAppDispatch();

  const handleKeyUp = (event: any) => {
    // Convert the keypress to lowercase to handle things like "c", "x", "backspace", "delete" reliably
    const key: string = event.key.toLowerCase();

    if (NumberButtonLabels.includes(key)) {
      dispatch(press_number(key));
    } else if (OperatorButtonLabels.includes(key)) {
      // Handles "+", "-"
      dispatch(press_operator(key));
    } else if (key === "/") {
      dispatch(press_operator("÷"));
    } else if (key === "x" || key === "*") {
      dispatch(press_operator("x"));
    } else if (key === ".") {
      dispatch(press_decimal());
    } else if (key === "c" || key === "backspace" || key === "delete") {
      dispatch(press_clear());
    } else if (key === "=" || key === "enter") {
      dispatch(press_equals());
    } else if (key === "%") {
      dispatch(press_percent());
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
