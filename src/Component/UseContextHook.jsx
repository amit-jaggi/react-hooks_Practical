import React, {useContext} from "react";
import { UserContext } from "./UserContext";

export const UseContextHook = () => {
    const [users, setUsers] = useContext(UserContext);
    
    return (
        <>
            {
                users.map(
                    ({name, age, dept, salary, lang}, index) => <h2 key={index}>{name} || {age} || {dept} || {salary} || {lang} </h2>
                )
            }
        </>
    );
}

// WHY to use useContext? This hook is used to avoid props drilling.

// Solution to props drilling : Context API

// Context API: It lets us to store the data at a single place and then in whatsoever component we wawnt ot receive the data we need to make sure that the component is wrapped with the context API.

// Now to use the context API data on the component we need useContext Hook.

