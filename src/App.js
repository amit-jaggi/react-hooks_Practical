import './App.css';
import React, {useState} from 'react';
import ChangeName from './Component/ChangeName';
import UpdateAge from './Component/UpdateAge';
import {UseEffectHook} from './Component/UseEffectHook';
import {UseContextHook} from './Component/UseContextHook';
import UserDetailProvider from './Component/UserContext';
import UseReducerHook from './Component/UseReducerHook';

const App = () => {
  document.title = "React Hooks";

  const [display, setDisplay] = useState(true);

  return (
    <div className="App">
      <h1>UNDERSTANDING DIFFERENT HOOKS</h1>
      <div className="useState-container">
        <h2>useState Hook</h2>
        <hr />
        <ChangeName />
        <UpdateAge />
      </div>
      <div className="useEffect-container">
        <h2>useEffect Hook</h2>
        <hr />
        {
          display && <UseEffectHook />
        }
        <button onClick={() => setDisplay(false)}>Unmount UseEffectHook Component</button>
      </div>
      <div className="useContext-container">
        <h2>useContext Hook</h2>
        <hr />
        <UserDetailProvider>
          <UseContextHook />
        </UserDetailProvider>
      </div>
      <div className="useReducer-container">
        <h2>useReducer Hook</h2>
        <hr />
        <UseReducerHook />
      </div>
    </div>
  );
}

export default App;
