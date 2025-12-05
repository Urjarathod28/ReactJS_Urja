import React,{useState} from "react";
import Counter from "./Counter";
 export default function Countapp(){
    const[count,setCount]=useState(0);
    const increment=()=>{
        setCount(count+1);
    };
    const decrement=()=>{
        setCount(count-1);
    };
    return(
        <div>
            <h1>Count:{count}</h1>
            <Counter increment={increment}
            decrement={decrement}/>
        </div>
    );
}