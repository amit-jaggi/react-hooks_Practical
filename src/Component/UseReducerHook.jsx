import React from 'react';

const UseReducerHook = () => {
    return (
        <>
        </>
    );
}

export default UseReducerHook;

// useState v/s useReducer

// useState hook is easy to use when we are having primitive data-types like number, string. It is fine to use useState at some point for the non-primitive data-typs like objects when these objects are having 3 to 4 key-value pairs

// But generally we will be having big complex objects containing lots of key-value pairs, so to update the state, prevState concept becomes complex

// And to make easy & efficient we use useReducer hook
// useReducer() : it takes two arguments (reducer-function, initialState) which is responsible for updating the state variables 

// the reducer function again takes two parameters state and an action