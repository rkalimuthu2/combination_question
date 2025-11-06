import { useReducer } from "react";

export const initialState = {
  count: 0,
};

const countReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT": {
      return { ...state, count: state.count + 1 };
    }
    case "DECREMENT": {
      return { ...state, count: state.count - 1 };
    }
    default: {
      return state;
    }
  }
};

export const UseReducerExample = () => {
  const [state, dispatch] = useReducer(countReducer, initialState);

  return (
    <div>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Add </button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrease </button>
      {state.count}
    </div>
  );
};
