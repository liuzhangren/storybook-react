import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from '../components/Button';

const click = () => {
  console.log('hello world!!');
}
  

storiesOf('Button', module)
  .add('with text', () => (
    <Button sub = '按钮' onClick={click}>
    </Button>
  ))
  .add('with some emoji', () => (
    <Button sub = {<span role="img" aria-label="so cool">😀 😎 👍 💯</span>} onClick={click}>
    </Button>
  ));