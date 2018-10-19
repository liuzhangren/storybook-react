import React from 'react';

const button = ({
  sub,
  onClick
}) => (
  <button onClick = {onClick} >
    {sub}
  </button>
);

export default button