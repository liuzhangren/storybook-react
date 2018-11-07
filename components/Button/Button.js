import React from 'react';

export default ({
  sub,
  onClick
}) => (
  <button onClick = {onClick} >
    {sub}
  </button>
);