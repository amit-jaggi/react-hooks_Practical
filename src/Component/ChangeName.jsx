import '../App.css';

import React, {useState} from 'react';

const ChangeName = () => {
    const [name, setName] = useState(`Amit`);

    const changeName = () => setName(`Amit Jaggi`)

    return (
        <div className="updateName">
            <h1>Name: {name}</h1>
            
            <div className="btn-box">
                <button onClick={changeName}>Click to update the state variable by invoking an arrow function</button> 

                <button onClick={() => setName(`Amit Kumar Jaggi`)}>Click to update the state variable using a callBack function within the same line</button>
            </div>
        </div>
    );
}

export default ChangeName;

// alternative of creating state variables in functional component

// prevState concept:
// The prevState is required when we want to use the initial state variable value or the last state variable value for updating the new state variable value. 