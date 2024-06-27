import React, { useState } from "react";

export default function Test () {
    const [count, setCount] = useState(1);

    function incrementCount () {
        setCount(count + 1);
    }

    return (
        <>
            {count}
            <br />
            <button onClick={incrementCount}>+</button>
        </>
    );
}