import React from 'react';
import './dreams.css'


const DreamDate = (props) => {
  const month = props.date.toLocaleString('en-US', { month: 'long' });
  const day = props.date.toLocaleString('en-US', { day: '2-digit' });
  const year = props.date.getFullYear();

  return (
    <div className='dream-date'>
      <div>{month}</div>
      <div >{year}</div>
      <div >{day}</div>
    </div>
  );
};

export default DreamDate;
