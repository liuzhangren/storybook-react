import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import NormalButton from './components/normalButton';
import EmojButtom  from './components/emojButton';  

storiesOf('Button', module)
  .add('with text', () => (
    <NormalButton> </NormalButton>
  ))
  .add('with some emoji', () => (
    <EmojButtom > </EmojButtom>
  ));