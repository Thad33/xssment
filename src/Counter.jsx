import React, { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    case 'RESET':
      return { count: 0 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const handleMouseOver = () => {
    dispatch({ type: 'INCREMENT' });
  };

  const handleMouseClick = () => {
    dispatch({ type: 'DECREMENT' });
  };

  const handleReset = () => {
    dispatch({ type: 'RESET' });
  };

  return (
    <div>
      <p onMouseOver={handleMouseOver} onClick={handleMouseClick}>
        Count: {state.count}
      </p>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default Counter;
