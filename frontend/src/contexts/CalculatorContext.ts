import { createContext, Dispatch } from "react";
import { ActionType } from "./Actions";
import { IState } from "./types";

export const CalculatorContext = createContext<IState>({} as IState);
export const CalculatorDispatchContext = createContext<Dispatch<ActionType>>(
  {} as Dispatch<ActionType>
);
