import { createContext, Dispatch } from "react";
import { ActionType } from "./Actions";
import { IState } from "./types";

export const CalculatorContext = createContext<IState | null>(null);
export const CalculatorDispatchContext =
  createContext<Dispatch<ActionType> | null>(null);
