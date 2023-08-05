import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, reset, increaseByValue, decreaseByValue, incrementAsync, counterState } from '../store/slices/CounterSlice';

const Home = () => {
  // const data = useSelector((state) => state.reducer);
  // const data = useSelector((state) => state.counters.value);
  const data = useSelector(counterState);
  console.log(data);
  const dispatch = useDispatch();

  const incrementCounter = () => {
    dispatch(increment())
  };

  const decrementCounter = () => {
    dispatch(decrement())
  };

  const resetCounter = () => {
    dispatch(reset())
  };

  // const incrementByValueCounter = (data, e) => {
  //   console.log(e.target.value);
  //   dispatch(increaseByValue(data));
  // };

  const incrementCounterByValue = (value) => {
    // dispatch(increaseByValue(value))
    dispatch(increaseByValue(Number(value) || 0))
  };

  const decrementCounterByValue = (value) => {
    dispatch(decreaseByValue(Number(value) || 0));
  };

  const asyncCounter = (value) => {
    alert('Wait for 5 seconds')
    dispatch(incrementAsync(Number(value) || 0));
  };

  const [value, setValue] = useState('5');

  return (
    <>
      <div style={{ marginTop: '20px', marginLeft: '300px' }}>
        {/* <input type = 'text' name = '' value = {data} /> */}
        <div>{data}</div>
        <div style={{ display: 'flex', flexDirection: 'column', width: '12%' }}>
          <button style={{ marginTop: '10px' }} onClick={() => incrementCounter()}>Increment</button>
          <button style={{ marginTop: '10px' }} onClick={() => decrementCounter()}>Decrement</button>
          <button style={{ marginTop: '10px' }} onClick={() => resetCounter()}>Reset</button>
          <div>
            <input type="text" name='' value={value} onChange={e => setValue(e.target.value)} />
            <button style={{ marginTop: '10px' }} onClick={() => incrementCounterByValue(value)}>Increase By Value</button>
            <button style={{ marginTop: '10px' }} onClick={() => decrementCounterByValue(value)}>Decrease By Value</button>
            <button style={{ marginTop: '10px' }} onClick={() => asyncCounter(value)}>Async Value</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;


{/* <button style={{ marginTop: '10px' }} onClick={() => dispatch(inrement())}>Reset</button>  */ }