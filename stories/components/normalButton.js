import React from 'react';
import Button from '../../components/Button/Button';


const click = () => {
  console.log('hello world!!!');
}

export default () => (
  <Button sub = '按钮' onClick = {click} >

  </Button>
);