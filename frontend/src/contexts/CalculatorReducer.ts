import { IState } from "./types";
import { ActionType } from "./Actions";
import { create, all } from "mathjs";

// Set up mathjs for calculations.
const config = {};
const math = create(all, config);

export function calculatorReducer(state: IState, action: any) {
  function calculateResult(
    leftOperand: string,
    operator: string,
    rightOperand: string
  ) {
    // Special case: We transform "x" to "*" to use mathjs.
    if (operator === "x") {
      operator = "*";
    }

    // Special case: We transform "÷" to "/" to use mathjs.
    if (operator === "÷") {
      operator = "/";
    }

    const expression: string =
      leftOperand.trim() + operator.trim() + rightOperand.trim();
    const mathResult = "" + math.evaluate(expression);
    return mathResult;
  }

  console.log(state);

  switch (action.type) {
    case ActionType.NUMBER_PRESSED:
      if (
        state.leftOperand.length !== 0 &&
        state.operator.length !== 0 &&
        state.rightOperand.length !== 0 &&
        state.result.length !== 0
      ) {
        // Result displaying, we will clear everything and set left operand.
        return {
          leftOperand: action.payload,
          rightOperand: "",
          operator: "",
          result: "",
        };
      } else if (state.operator.length === 0) {
        // Operator not set, we will append onto the left operand.

        if (
          (state.leftOperand === "0" || state.leftOperand === "-0") &&
          action.payload === "0"
        ) {
          // Special case: When left operand is "0" or "-0" and we press "0" again, nothing happens.
          return { ...state };
        }

        if (state.leftOperand === "0" && action.payload !== "0") {
          // Special case: When left operand is "0" and we press any other number, we set the left operand.
          return {
            ...state,
            leftOperand: action.payload,
          };
        }

        if (state.leftOperand === "-0" && action.payload !== "0") {
          // Special case: When left operand is "-0" and we press any other number, we set the left operand.
          return {
            ...state,
            leftOperand: "-" + action.payload,
          };
        }

        return {
          ...state,
          leftOperand: state.leftOperand + action.payload,
          result: "",
        };
      } else if (state.result.length !== 0) {
        // Operator set but no result, we will set right operand.
        return {
          ...state,
          rightOperand: action.payload,
          result: "",
        };
      } else {
        // Operator is populated but not result, we will append onto the right operand.

        if (
          (state.rightOperand === "0" || state.rightOperand === "-0") &&
          action.payload === "0"
        ) {
          // Special case: When right operand is "0" or "-0" and we press "0" again, nothing happens.
          return { ...state };
        }

        if (state.rightOperand === "0" && action.payload !== "0") {
          // Special case: When right operand is "0" and we press any other number, we set the right operand.
          return {
            ...state,
            rightOperand: action.payload,
          };
        }

        if (state.rightOperand === "-0" && action.payload !== "0") {
          // Special case: When right operand is "-0" and we press any other number, we set the right operand.
          return {
            ...state,
            rightOperand: "-" + action.payload,
          };
        }

        return {
          ...state,
          rightOperand: state.rightOperand + action.payload,
          result: "",
        };
      }

    case ActionType.OPERATOR_PRESSED:
      if (state.rightOperand.length === 0) {
        // Ex. We have a left operand but no right operand yet, so we can set the operator freely.
        return {
          ...state,
          operator: action.payload,
        };
      } else if (state.result.length === 0) {
        // We have both operands, but no result so pressing another operator will press equals and operator at the same time.
        const result = calculateResult(
          state.leftOperand,
          state.operator,
          state.rightOperand
        );
        return {
          operator: action.payload,
          rightOperand: "",
          leftOperand: result,
          result: result,
        };
      } else {
        // We have a result, so pressing another operator will clear our right operand.
        return {
          ...state,
          operator: action.payload,
          rightOperand: "",
          result: "",
        };
      }

    case ActionType.EQUALS_PRESSED:
      if (state.operator.length === 0) {
        // We have no operator, so pressing "=" does nothing.
        return {
          ...state,
        };
      } else if (state.rightOperand.length === 0) {
        // We have an operator, so we use the left operand for both operands.
        return {
          ...state,
          leftOperand: calculateResult(
            state.leftOperand,
            state.operator,
            state.leftOperand
          ),
        };
      } else {
        // Normal calculation, we set both the left operand and result to the result.
        const result = calculateResult(
          state.leftOperand,
          state.operator,
          state.rightOperand
        );
        return {
          ...state,
          leftOperand: result,
          result: result,
        };
      }

    case ActionType.PLUS_MINUS_PRESSED:
      if (state.operator.length === 0) {
        if (state.leftOperand.includes("-")) {
          // If there is a "-", we replace it with a blank on the left operand.
          return {
            ...state,
            leftOperand: state.leftOperand.replace("-", ""),
          };
        } else {
          // If there is no "-", we prepend it to the left operand.
          return {
            ...state,
            leftOperand: "-" + state.leftOperand,
          };
        }
      } else {
        if (state.rightOperand.includes("-")) {
          // If there is a "-", we replace it with a blank on the right operand.
          return {
            ...state,
            rightOperand: state.rightOperand.replace("-", ""),
          };
        } else {
          // If there is no "-", we prepend it to the right operand.
          return {
            ...state,
            rightOperand: "-" + state.rightOperand,
          };
        }
      }

    case ActionType.PERCENT_PRESSED:
      // TODO: Implement this case.
      return { ...state };

    case ActionType.DECIMAL_PRESSED:
      if (state.result.length !== 0) {
        // Displaying result and pressing "." will clear everything and set the left operand.
        return {
          ...state,
          leftOperand: "0.",
          rightOperand: "",
          operator: "",
          result: "",
        };
      } else if (state.operator.length === 0) {
        // No operator, so we are appending onto the left operand.
        if (state.leftOperand.includes(".")) {
          return { ...state };
        } else if (state.leftOperand === "0") {
          return {
            ...state,
            leftOperand: "0.",
          };
        } else {
          return {
            ...state,
            leftOperand: state.leftOperand + ".",
          };
        }
      } else {
        // We are appending onto the right operand.
        if (state.rightOperand.includes(".")) {
          return { ...state };
        } else if (
          state.rightOperand.length === 0 ||
          state.rightOperand === "0"
        ) {
          // Operator set and pressing "." with no right operand or "0" as right operand will set right operand.
          return {
            ...state,
            rightOperand: "0.",
          };
        } else {
          return {
            ...state,
            rightOperand: state.rightOperand + ".",
          };
        }
      }

    case ActionType.CLEAR_PRESSED: {
      return {
        leftOperand: "0",
        rightOperand: "",
        operator: "",
        result: "",
      };
    }

    default:
      throw Error("Unknown action type: " + ActionType[action.type]);
  }
}
