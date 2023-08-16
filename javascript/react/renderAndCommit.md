### React commits changes to the DOM
 React only changes the DOM nodes if there's a difference betwwen renders.

``` javascript 
export default function Clock({time} {
    return (
        <>
         <h1>{time}</h1>
         <input />
        </>
    )
})
```

This works because during this last step,React only updates the content of **h1** with the new time.
It sees that the ***input*** appears in the JSX in the same place as last time,so React doesn't touch the ***input*** or its value!


### shouldComponentUpdate

If the only way your component ever changes is when the props.color or the state.count variable changes, you could have shouldComponentUpdate check that:

``` javascript
class CounterButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: 1};
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.color !== nextProps.color) {
      return true;
    }
    if (this.state.count !== nextState.count) {
      return true;
    }
    return false;
  }

  render() {
    return (
      <button
        color={this.props.color}
        onClick={() => this.setState(state => ({count: state.count + 1}))}>
        Count: {this.state.count}
      </button>
    );
  }
}
```

###  React.PureComponent
 If those values don’t change, the component doesn’t update. If your component got more complex, you could use a similar pattern of doing a “shallow comparison” between all the fields of props and state to determine if the component should update. This pattern is common enough that React provides a helper to use this logic - just inherit from React.PureComponent. So this code is a simpler way to achieve the same thing:

 ``` javascript

class ListOfWords extends React.PureComponent {
  render() {
    return <div>{this.props.words.join(',')}</div>;
  }
}

class WordAdder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words: ['marklar']
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // This section is bad style and causes a bug
    const words = this.state.words;
    words.push('marklar');
    this.setState({words: words});
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick} />
        <ListOfWords words={this.state.words} />
      </div>
    );
  }
}

 ```

 ### Avoid not mutating data
 
 The simplest way to avoid this problem is to avoid mutating values that you are using as props or state.

 * Object.assign
 * Object spread syntax


### memo
When you use memo, your component re-renders whenever any prop is not shallowly equal to what it was previously. This means that React compares every prop in your component with its previous value using the Object.is comparison. Note that Object.is(3, 3) is true, but Object.is({}, {}) is false.




**Skipping re-rendering when props are unchanged**

如果你的应用程序像这个网站，并且大多数交互都很粗糙（比如替换一个页面或整个部分），那么记忆通常是不必要的。另一方面，如果你的应用程序更像一个绘图编辑器，并且大多数交互都是细粒度的（比如移动的形状），那么你可能会发现记忆非常有用。

**Updating a memoized component using a context**

Even when a component is memoized,it will still re-render when a context that it's using changes.
Memoization only has to

``` javascript 
const MemoizedComponent = memo(SomeComponent, arePropsEqual?)

```

``` javascript 

export default React.memo(Item, (prevProps, nextProps) => {
  console.log("prevProps,nextProps", prevProps, nextProps);
  const prevItem = prevProps.itm;
  const nextItem = nextProps.itm;
  const prevOffer = filter.rateFormat(prevItem.offer, 4, prevItem.symbol);
  const nextOffer = filter.rateFormat(nextItem.offer, 4, nextItem.symbol);
  const prevBuy = filter.rateFormat(prevItem.buy, 4, prevItem.symbol);
  const nextBuy = filter.rateFormat(nextItem.buy, 4, nextItem.symbol);
  return prevOffer === nextOffer && prevBuy === nextBuy;
});

```

### useMemo

useMemo is a React Hook that lets you cache the result of a calculation between re-renders.

``` javascript
function Page() {
  const [name, setName] = useState('Taylor');
  const [age, setAge] = useState(42);

  const person = useMemo(
    () => ({ name, age }),
    [name, age]
  );

  return <Profile person={person} />;
}

const Profile = memo(function Profile({ person }) {
  // ...
});

```
A better way to minimize props changes is to make sure the component accepts the minimum necessary information in its props. For example, it could accept individual values instead of a whole object:
``` javascript 
function Page() {
  const [name, setName] = useState('Taylor');
  const [age, setAge] = useState(42);
  return <Profile name={name} age={age} />;
}

const Profile = memo(function Profile({ name, age }) {
  // ...
});
```

 







 ### 参考
* > https://react.dev/learn/render-and-commit
* > https://legacy.reactjs.org/docs/optimizing-performance.html
* > https://react.dev/reference/react/useMemo
* > https://react.dev/reference/react/memo