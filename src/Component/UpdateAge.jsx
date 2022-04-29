import React, {useState} from 'react';

const UpdateAge = () => {
    const [currAge, setCurrAge] = useState({age : 20});

    const updateAge = () => {
        setCurrAge(
            // using callBack for updating age within an object
            prevAge => ({
                ...prevAge, age : 28
            })
        );
    };

    return (
        <div className="updateAge">
            <h1>Age: {currAge.age}</h1>
            <button onClick={updateAge}>Click to update the state of an object</button>
        </div>
    );
}

export default UpdateAge;