import React, { useState } from 'react';
import './DreamForm.css'


import DreamForm from './DreamForm';

const NewDream = (props) => {

  const saveDreamDataHandler = (enteredDreamData) => {
    const dreamData = {
      ...enteredDreamData,
      id: Math.random().toString(),
    };
    props.onAddDream(dreamData);
  };

  

  return (
    <div  className='new-dream'>
     
      {(
        <DreamForm
          onSaveDreamData={saveDreamDataHandler}
        
        />
      )}
    </div>
  );
};

export default NewDream;
