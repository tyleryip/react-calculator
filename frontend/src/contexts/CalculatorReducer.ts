import { IState } from "./types";
import { ActionType } from "./Actions";
import { create, all } from "mathjs";

// Set up mathjs for calculations.
const config = {};
const math = create(all, config);

export function calculatorReducer(state: IState, action: any) {
  switch (action.type) {
    case ActionType.LEFT_OPERAND_APPENDED:
      return {
        ...state,
        leftOperand: state.leftOperand.concat(action.payload),
      };

    case ActionType.RIGHT_OPERAND_APPENDED:
      return {
        ...state,
        rightOperand: state.rightOperand.concat(action.payload),
      };

    case ActionType.OPERATOR_SET:
      // Special case for *, since we display the label "x" but need to use "*" in mathjs calculations.
      if (action.payload === "x") {
        return {
          ...state,
          operator: "*",
        };
      }

      return {
        ...state,
        operator: action.payload,
      };

    case ActionType.ANSWER_CALCULATED:
      // TODO: We set left operand to the result, pressing equals again will trigger
      // another ANSWER_CALCULATED action maintaining the same rightOperand and
      // operator.

      const expression: string =
        state.leftOperand + state.operator + state.rightOperand;
      const result: string = math.evaluate(expression);

      return {
        leftOperand: result,
        operator: "",
        rightOperand: "",
      };

    case ActionType.WINDOW_CLEARED:
      return {
        leftOperand: "",
        rightOperand: "",
        operator: "",
      };

    default:
      throw Error("Unknown action type: " + ActionType[action.type]);
  }
}
