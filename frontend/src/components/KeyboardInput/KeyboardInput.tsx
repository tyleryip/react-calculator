import React, { useContext, useEffect } from "react";
import {
  NumberButtonLabels,
  OperatorButtonLabels,
} from "../../constants/Constants";
import { ActionType } from "../../contexts/Actions";
import { CalculatorDispatchContext } from "../../contexts/CalculatorContext";

// The KeyboardInput component does not render anything to the DOM but handles keyboard inputs.
export default function KeyboardInput() {
  const dispatch = useContext(CalculatorDispatchContext);

  const handleKeyUp = (event: any) => {
    // Convert the keypress to lowercase to handle things like "c", "x", "backspace", "delete" reliably
    const key: string = event.key.toLowerCase();

    if (NumberButtonLabels.includes(key)) {
      dispatch({
        type: ActionType.NUMBER_PRESSED,
        payload: key,
      });
    } else if (OperatorButtonLabels.includes(key)) {
      // Handles "+", "-"
      dispatch({
        type: ActionType.OPERATOR_PRESSED,
        payload: key,
      });
    } else if (key === "/") {
      dispatch({
        type: ActionType.OPERATOR_PRESSED,
        payload: "÷",
      });
    } else if (key === "x" || key === "*") {
      dispatch({
        type: ActionType.OPERATOR_PRESSED,
        payload: "x",
      });
    } else if (key === ".") {
      dispatch({
        type: ActionType.DECIMAL_PRESSED,
      });
    } else if (key === "c" || key === "backspace" || key === "delete") {
      dispatch({
        type: ActionType.CLEAR_PRESSED,
      });
    } else if (key === "=" || key === "enter") {
      dispatch({
        type: ActionType.EQUALS_PRESSED,
      });
    } else if (key === "%") {
      dispatch({
        type: ActionType.PERCENT_PRESSED,
      });
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
