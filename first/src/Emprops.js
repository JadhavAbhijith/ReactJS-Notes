import React from "react";

function Emprops(props)
{
    return(
        <div>
            <h2>Employee details</h2>
            <h4>Id: {props.id}</h4>
            <h4>Name: {props.name}</h4>
            <h4>Project: {props.project}</h4>
            <h4>Salary: {props.salary}</h4>
        </div>
    );
}
export default Emprops;