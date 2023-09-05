
### Imperative And Declarative

Manipulating the UI imperatively works well enough for isolated examples, but it gets exponentially more difficult to manage in more complex systems. Imagine updating a page full of different forms like this one. Adding a new UI element or a new interaction would require carefully checking all existing code to make sure you haven’t introduced a bug (for example, forgetting to show or hide something).



### Principles for structuring state

1. **Group related state.** If you always update two or more state variables at the same time,consider merging them into a single state variable.
2. **Avoid contradictions in state.** When the state is structured in a way that several pieces of state may contradict and "disagree" with each other,you leave room for mistakes.Try to avoid this.
3. **Avoid redundant state.**

#### Group related state

```javascript

const [x,setx] = useState(0);
const [y,sety] = useState(0);

const [position,setPosition] = useState({x:0,y:0});

```

#### Avoid contradictions in state

Since isSending and isSent should never be true at the same time, it is better to replace them with one status state variable that may take one of three valid states: 'typing' (initial), 'sending', and 'sent':

```javascript 

import { useState } from 'react';

export default function FeedbackForm() {
  const [text, setText] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setIsSending(true);
    await sendMessage(text);
    setIsSending(false);
    setIsSent(true);
  }

  if (isSent) {
    return <h1>Thanks for feedback!</h1>
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>How was your stay at The Prancing Pony?</p>
      <textarea
        disabled={isSending}
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <br />
      <button
        disabled={isSending}
        type="submit"
      >
        Send
      </button>
      {isSending && <p>Sending...</p>}
    </form>
  );
}

// Pretend to send a message.
function sendMessage(text) {
  return new Promise(resolve => {
    setTimeout(resolve, 2000);
  });
}

```

#### Avoid redundant state 

If you can calculate some information from the component’s props or its existing state variables during rendering, you should not put that information into that component’s state.

``` javascript
import { useState } from 'react';

export default function Form() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
    setFullName(e.target.value + ' ' + lastName);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
    setFullName(firstName + ' ' + e.target.value);
  }

  return (
    <>
      <h2>Let’s check you in</h2>
      <label>
        First name:{' '}
        <input
          value={firstName}
          onChange={handleFirstNameChange}
        />
      </label>
      <label>
        Last name:{' '}
        <input
          value={lastName}
          onChange={handleLastNameChange}
        />
      </label>
      <p>
        Your ticket will be issued to: <b>{fullName}</b>
      </p>
    </>
  );
}


```

This form has three state variables: firstName, lastName, and fullName. However, fullName is redundant. You can always calculate fullName from firstName and lastName during render, so remove it from state.


### 参考
* > https://react.dev/learn/reacting-to-input-with-state
* > https://react.dev/learn/choosing-the-state-structure