# Table Multiplication in React
#### You need to make a custom component in a fresh React app where there will be a button which on click - The counter should increment by (num * 5).

### Code:
```javascript
import React, { useState, useEffect } from 'react';

function Counter(){
    const [value, setValue] = useState(1);
    const [multipliedValue, setMultipliedValue] = useState(1);

    const multiplybyfive = () => {
        setMultipliedValue(value * 5);
        setValue(value + 1);
    }

    return(
        <div>
            <h1>Main Value: {value}</h1>
            <button onClick={multiplybyfive}>Click to multiply by 5</button>
            <h1>Final Value: {multipliedValue}</h1>
        </div>
    )
}
export default Counter;
```