import React, { useReducer } from "react";
import {
  CalculatorContext,
  CalculatorDispatchContext,
} from "../../contexts/CalculatorContext";
import { calculatorReducer } from "../../contexts/CalculatorReducer";
import { IState } from "../../contexts/types";

const initialState: IState = {
  leftOperand: "",
  rightOperand: "",
  operator: "",
};

export default function CalculatorContainer(props: any) {
  const [state, dispatch] = useReducer(calculatorReducer, initialState);

  return (
    <CalculatorContext.Provider value={state}>
      <CalculatorDispatchContext.Provider value={dispatch}>
        <div className="text-center">
          <p>This is the calculator container.</p>
          {props.children}
        </div>
      </CalculatorDispatchContext.Provider>
    </CalculatorContext.Provider>
  );
}
