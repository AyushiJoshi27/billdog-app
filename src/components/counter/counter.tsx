import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Divider } from '@chakra-ui/react';
import { decrement, incrementAsync } from '../../redux/slices/counterSlice';
import { AppDispatch, RootState } from '../../redux/store';

export default function CounterCompo() {
const count = useSelector((state: RootState) => state.counter.value);
const countState = useSelector((action: RootState) => action);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div>
      <h2>{count}</h2>
      <div>
        <Button onClick={() => dispatch(incrementAsync(10))}>Increment</Button>
        <Divider />
        <Button onClick={() => dispatch(decrement())}>Decrement</Button>
      </div>
    </div>
  );
};