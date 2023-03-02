//import logo from './logo.svg';
import { createSignal, createEffect } from 'solid-js';

import styles from './App.module.css';
import Counter from './components/Counter';
import Header from './components/Header';

function App() {

  // you call values as a function: counter() in stead of counter
  const [counter, setCounter] = createSignal(0); // 0 iunitial value
  const doubleCounter = () => counter() * 2;

  // In react, this'd  create an infinite loop
  // No need of useEffect
  setInterval(() => {
    setCounter((prev) => prev + 1);
  }, 1000);

  createEffect(() => {
    console.log('Effect happened');
    console.log("Counter: ", counter());
  });


  return <>
    <Header />
    <Counter value={counter()} />
    <div>
      <button onclick={() => setCounter(doubleCounter())}>*2</button>
      <button onclick={() => setCounter(counter() - 1)}>-</button>
      <button onclick={() => setCounter((prev) => prev + 1)}>+</button>
    </div>
  </>
}

export default App;
