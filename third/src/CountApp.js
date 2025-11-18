import React,{useState} from "react";

function CountApp()
{
    //Declare a new state variable called "count"
    const[count, setCount] = useState(0);

    return(
        <div>
            <p>You Clicked {count} times</p>
            <button onClick={() => setCount(count+1)}>Click me</button>
        </div>
    );
}

export default CountApp;