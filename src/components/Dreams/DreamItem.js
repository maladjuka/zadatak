import React from 'react';

import DreamDate from './DreamDate';
import Card from '../UI/Card';
import './dreams.css'

const DreamItem = (props) => {


  
  return (
    <li className='dream__item'>
      <Card className='card' >
        <DreamDate date={props.date} />
        <div className='dreme-item' >
          <h2>{props.title}</h2>
          <div >{props.description}</div>
          <div>{props.type}</div>
          <div><button >Delete dream</button></div>
          
        </div>
      </Card>
    </li>
  );
};

export default DreamItem;
