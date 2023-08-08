
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
    pair = [initialState,setState]
    function setState(nextState){
        pair[0]=nextState;
        // rerender()
    }


}


```


### 参考
* > https://react.dev/learn/state-a-components-memory
* > https://medium.com/@ryardley/react-hooks-not-magic-just-arrays-cd4f1857236e