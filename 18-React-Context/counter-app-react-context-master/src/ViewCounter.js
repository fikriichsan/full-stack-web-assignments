import React from 'react';

import { useCount } from './CountContext'

const ViewCounter = () => {
  // set state count from useCount
  const {state, dispatch} = useCount();
  
  return (
    <div>
      {/* change 0 with count from context */}
      Count is {state.count}
    </div>
  );
}

export default ViewCounter;