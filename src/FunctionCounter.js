import React, { useState } from "react";

const FunctionCounter = () =>{
    const [count, setCount] = useState(0);

    const increment = () =>{
        setCount(count+1);
    }

    const decrement =() =>{
        if(count > 0) setCount(count-1);
    };

    return(
        <div className="counter-box">
            <h2>Function Component Counter</h2>
            <p className="count-value">{count}</p>

            <div className="btn-group">
                <button onClick={increment} className="btn">+</button>
                <button onClick={decrement} className="btn">-</button>
            </div>
        </div>
    );
};

export default FunctionCounter;