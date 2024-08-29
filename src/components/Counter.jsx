import classes from './Counter.module.css';
import {useSelector,useDispatch} from 'react-redux'
import { counterAction } from '../store/slice/counter';

const Counter = () => {
  const dispatch=useDispatch()
  const counter=useSelector(state=>state.counter.count)
  const toggle=useSelector(state=>state.counter.showCounter)
  const toggleCounterHandler = () => {
    dispatch(counterAction.toggle())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      {toggle?
      <div className='count'>
        <button onClick={()=>{dispatch(counterAction.increment())}}>inc</button>
        <button onClick={()=>{dispatch(counterAction.decrement())}}>dec</button>
        <button onClick={()=>{dispatch(counterAction.variable(10))}}>Increase by 5</button>
      </div>
      :
      ''
}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
