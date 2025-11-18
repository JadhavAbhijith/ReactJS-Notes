import React, {useEffect, useState} from "react";

function Welcome()
{
    useEffect(() => {
        alert("Welcome to my Website!");
    }, []);    //Runs only when the Component loads


    return <h2>Hello User</h2>;
}

export default Welcome;