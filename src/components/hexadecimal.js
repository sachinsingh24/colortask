import React from 'react';
import './hexadecimal.css';

const Color = (props) => {
  // bgColor.Style.backgroundColor = `${props.colorName}`;
  return (
    <div className='bgColor'>
      <h1 style={{ backgroundColor: `${props.colorName}` }}>
        {props.colorName}
      </h1>
    </div>
  );
};

// let bgColor = document.querySelector('bgColor');
// // let a = bgColor.Style.backgroundColor;

export default Color;
