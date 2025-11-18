import React, {useState, useEffect} from "react";

function Counting()
{
    const[count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Current Count: ${count}`;
    }, [count]);    //Runs whenever count changes


    return(
        <div>
            <p>Current Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increase</button>
        </div>
    );
}

export default Counting;