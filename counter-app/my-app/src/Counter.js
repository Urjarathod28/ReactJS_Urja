import React  from "react";
import "./counter.css";
function Counter(props){
    return(
        <div className="counter">
            <button onClick={props.increment}>Increment</button>
            <button onClick={props.decrement}>Decrement</button>
        </div>
    );
}
export default Counter;