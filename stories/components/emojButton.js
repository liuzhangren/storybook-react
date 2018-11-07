import React from 'react';
import Button from '../../components/Button/Button';


const click = () => {
  console.log('hello world!!!');
}

export default () => (
  <Button sub = {<span role="img" aria-label="so cool">😀 😎 👍 💯</span>} onClick = {click} >

  </Button>
)