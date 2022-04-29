import React, {useState, createContext} from "react";

export const UserContext = createContext();

const UserDetailProvider = props => {
    const [language, setLanguage] = useState([
        {name:`A`, age: 42, dept: `B. Bom`, salary: 35000, lang: `English`},
        {name:`B`, age: 25, dept: `B. Tech`, salary: 25000, lang: `Spanish`},
        {name:`C`, age: 36, dept: `Mechnical`, salary: 45000, lang: `Chinese`},
        {name:`D`, age: 50, dept: `MCA`, salary: 15000, lang: `Hindi`}
    ]);

    return (
        <>
            <UserContext.Provider value={[language, setLanguage]}>
                {props.children}
            </UserContext.Provider>
        </>
    );
}

export default UserDetailProvider;

// Steps for using a Context API
// Step 1: We need to create a context for Languages using createContext() function.

// Step 2: Create a functional component which will return Context.Provider. (props.children are generally components)