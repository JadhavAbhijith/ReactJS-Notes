import React from "react";

function Studprops(props)
{
    return(
        <div>
            <h2>Student details</h2>
            <h4>Roll: {props.roll}</h4>
            <h4>Name: {props.name}</h4>
            <h4>Grade: {props.grade}</h4>
            <h4>Result: {props.result}</h4>
        </div>
    );
}
export default Studprops;