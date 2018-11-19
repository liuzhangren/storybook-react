import React, { useState,useEffect } from 'react';

export default () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if(count === 10) {
      console.log('you have clicked ' + count + ' times');
    }
    
  });
  return (
    <div>
      <p> 你点击了 {count} 次 </p>
      <button onClick = {() => setCount(count+1)} > Click </button>
    </div>
  )
}