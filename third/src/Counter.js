import React, {useState} from 'react';

const Counter = () => {
    const[count, setCount] = useState(0);
    const incrementCount = () => setCount(count + 1);
    const decrementCount = () => setCount(count - 1);

    return (
        <div>
            <p>{count} times Clicked</p>
            <button onClick={incrementCount}>Increment</button>
            <button onClick={decrementCount}>Decrement</button>
        </div>
    );
}

export default Counter;