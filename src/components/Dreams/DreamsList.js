import React from 'react';

import DreamItem from './DreamItem';
import './dreams.css'
const DreamList = (props) => {
  if (props.items.length === 0) {
    return <h2>You should start dreaming!</h2>;
  }

  return (
    <ul className='dream-list'>
      {props.items.map((dream) => (
        <DreamItem
          key={dream.id}
          title={dream.title}
          description={dream.description}
          date={dream.date}
          type={dream.type}

        
          
        />
      ))}
    </ul>
  );
};

export default DreamList;
