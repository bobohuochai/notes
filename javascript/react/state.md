## State as a Snapshot


### How does React know which state to return 

Internally, React holds an array of state pairs for every component. It also maintains the current pair index, which is set to 0 before rendering. Each time you call useState, React gives you the next state pair and increments the index.You can read more about this mechanism in React Hooks: Not Magic, Just Arrays.


``` javascript

let componentHooks = [];
let currentHookIndex =0 ;

function useState(initialState){
    let pair = componentHooks[currentHookIndex];
    if(pair){
        
        currentHookIndex++
        return pair
    }
    function setState(nextState){
        pair[0]=nextState;
        // rerender()
    }
    pair = [initialState,setState];

    componentHooks[currentHookIndex] = pair;
    currentHookIndex++

    return pair
}


```

### Setting state only changes it for the next render. 


+1

``` javascript

import { useState } from 'react';

export default function Counter() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button onClick={() => {
        setNumber(number + 1);
        setNumber(number + 1);
        setNumber(number + 1);
      }}>+3</button>
    </>
  )
}


```

### A state variable’s value never changes within a render

even if its event handler’s code is asynchronous. Inside that render’s onClick, the value of number continues to be 0 even after setNumber(number + 5) was called. Its value was “fixed” when React “took the snapshot” of the UI by calling your component.


0
``` javascript 
import { useState } from 'react';

export default function Counter() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button onClick={() => {
        setNumber(number + 5);
        setTimeout(() => {
          alert(number);
        }, 3000);
      }}>+5</button>
    </>
  )
}
```

**React keeps the state values “fixed” within one render’s event handlers. You don’t need to worry whether the state has changed while the code is running.**
























### 参考
* > https://react.dev/learn/state-a-components-memory
* > https://medium.com/@ryardley/react-hooks-not-magic-just-arrays-cd4f1857236e
* > https://react.dev/learn/queueing-a-series-of-state-updates