import React from 'react';
import './index.css';
import Color from './components/hexadecimal.js';

export default function App() {
  return (
    <div className='head'>
      <Color colorName='#f58142' />
      <Color colorName='#f5c542' />
      <Color colorName='#bff542' />
      <Color colorName='#42f5c8' />
      <Color colorName='#428af5' />
      <Color colorName='#cb42f5' />
      <Color colorName='#f542e6' />
      <Color colorName='#f54290' />
    </div>
  );
}
