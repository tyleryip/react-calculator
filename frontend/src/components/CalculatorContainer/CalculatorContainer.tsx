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

// The only responsibility the CalculatorContainer will have is providing context to children.
export default function CalculatorContainer(props: any) {
  const [state, dispatch] = useReducer(calculatorReducer, initialState);

  return (
    // Any children that need access to state can use the CalculatorContext
    // Any children that need access to the dispatch function can use the CalculatorDispatchContext
    <CalculatorContext.Provider value={state}>
      <CalculatorDispatchContext.Provider value={dispatch}>
        {props.children}
      </CalculatorDispatchContext.Provider>
    </CalculatorContext.Provider>
  );
}
