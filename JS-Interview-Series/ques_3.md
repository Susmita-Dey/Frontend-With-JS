# A React interview question on Counter
#### You are given a counter component. You need to implement the functionality of incrementing and decrementing the counter value.

### Code:
```javascript
import React, { useState } from 'react';

function App(){
    const [counter, setCounter] = useState(0);

    // let counter=15;
    
    const addValue = () => {
        // counter = counter + 1;
        // console.log(counter);
        setCounter(counter + 1);
        // Here setcounter internally returns a function that will update the value of counter.
        // setCounter((prevCounter) => prevCounter + 1);
    }

    const subtractValue = () => {
        setCounter(counter - 1);
    }

    return(
        <div>
            <h1>Counter: {counter}</h1>
            <button onClick={addValue}>Increment</button>
            <button onClick={subtractValue}>Decrement</button>
        </div>
    )
}
```

