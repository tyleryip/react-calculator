import { createContext, Dispatch } from "react";
import { IState } from "./types";

export const CalculatorContext = createContext<IState>({} as IState);
export const CalculatorDispatchContext = createContext<Dispatch<any>>(
  {} as Dispatch<any>
);
