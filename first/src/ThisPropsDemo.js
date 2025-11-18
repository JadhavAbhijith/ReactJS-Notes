import React from "react";

function ThisPropsDemo(props)
{
    //Declare props Variables
    const name = props.name;
    const tool = props.tool;

    return(
        <div>
            {/* use variables in JSX template */}
            <h1>My name is {name}.</h1>
            <p>My favorite design tool is {tool}</p>
        </div>
    )
}

export default ThisPropsDemo;