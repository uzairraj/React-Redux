import {useSelector,useDispatch} from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state=>state.counter);
  const show = useSelector(state=>state.showCounter )

  const incrementHandler = () => {

    dispatch({type:'increment'});

  };
  //using payload action
  const increaseHandler = () => {

    dispatch({type:'incrementby5',amount:5});

  };

  const decrementHandler = () =>{
    
    dispatch({type:'decrement'});

  };


  const toggleCounterHandler = () => {
    dispatch({type:'toggle'});


  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
     {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>increment</button>
        <button onClick={increaseHandler}>increaseby5</button>
        <button onClick={decrementHandler}>decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
