import { useState } from "react";

export default function Customers(){
    const [customersCount, setCustomersCount] = useState(2);
    return(
        <div className="hbox space-between mt20">
        <h3 className="paragraph">Book counter: {customersCount}</h3>
        <button className="button" onClick={() => setCustomersCount(customersCount + 1)}>
          add Customers
        </button>
      </div>
    );
    
}