import { IState } from "./types";
import { ActionType } from "./Actions";

export function calculatorReducer(state: IState, action: any) {
  switch (action.type) {
    case ActionType.LEFT_OPERAND_UPDATED:
      return {
        ...state,
        leftOperand: state.leftOperand + action.leftOperand,
      };
    case ActionType.RIGHT_OPERAND_UPDATED:
      return {
        ...state,
        rightOperand: state.rightOperand + action.rightOperand,
      };
    case ActionType.OPERATOR_UPDATED:
      return {
        ...state,
        operator: action.operator,
      };
    case ActionType.ANSWER_CALCULATED:
      return {
        ...state,
        // leftOperand: (calculate answer logic here)
        // We set left operand to the result, pressing equals again will trigger
        // another ANSWER_CALCULATED action maintaining the same rightOperand and
        // operator.
      };
    case ActionType.WINDOW_CLEARED:
      return {
        leftOperand: "",
        rightOperand: "",
        operator: "",
      };
    default:
      throw Error("Unknown action type: " + action.type);
  }
}
