import { useState } from "react";

export default function Counters({item, inVal}){
    const [count, setCount] = useState(inVal);
    return(
        <div className="hbox space-between mt20">
        <h3 className="paragraph">{item} counter: {count}</h3>
        <button className="button" onClick={() => setCount(count + 1)}>
          add {item}
        </button>
      </div>
    );
    
}