import {useState, useEffect} from 'react';

export const UseEffectHook = () => {
    const [a, setA]  =  useState(`ABC`);
    const [b, setB]  =  useState(`XYZ`);

    // componentDidMount: works only first time while mounting
    // useEffect (
    //     () => {
    //         console.log('Hello UseEffect Hook');
    //     }, []
    // )

    /**/
    // componentDidMount & componentDidUpdate: works multiple times while updating
    // useEffect (
    //     () => {
    //         console.log('Hello UseEffect Hook');
    //     }
    // )

    // componentDidMount & componentDidUpdate for "a" state variable only
    // useEffect (
    //     () => {
    //         console.log('Hello UseEffect Hook');
    //     }, [a]
    // )

   // componentWillUnmount: using cleanup function 
    useEffect(
        () => {
            return function cleanUp () {
                console.log("useEffect behaves like componentWillUnmount");
            }
        }
    )// problem

    return (
        <>
            <div className="content">
                <p>Value of variable a : {a}</p>
                <p>Value of variable b : {b}</p>
            </div>
            <div className="content-btn">
                <button onClick={() => setA("DEF")}>Update a state value</button>
                <button onClick={() => setB("PQR")}>Update b state value</button>
            </div>
        </>
    );
}

// useEffect is "Named" export from the "react" library. It is used to make server calls.

// it is an alternative of lifecycle methods: componentDidMount, componentDidUpdate, componentWillUnmount

// it accepts a callback function as its first parameter, and a dependency array as a second paramter

// if we do not want the useEffect should function like a componentDidUpdate then we should pass an empty dependency array

// the useEffect can be executed like componentDidUpdate only for one state variable is by pass a dependency array as a second parameter & define that one state variable only

// cleanup function is a function that basically try took execute when a component is getting unmounted from the DOM screen. It is used for memeory leaks.