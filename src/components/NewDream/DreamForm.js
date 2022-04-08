import React, { useState , useEffect} from 'react';
import './DreamForm.css'


const DreamForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredDescription, setEnteredDescription] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
const [enteredType, setEnteredType]= useState('')

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
   
  };

  const descriptionChangeHandler = (event) => {
    setEnteredDescription(event.target.value);
    
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    
  };

  const typeChangeHandler= (event)=>{
      setEnteredType(event.target.value)
  }

  const submitHandler = (event) => {
    event.preventDefault();

    const dreamData = {
      title: enteredTitle,
      description: enteredDescription,
      date: new Date(enteredDate),
      type: enteredType
    };
    console.log(dreamData)
   
    
    props.onSaveDreamData(dreamData);
    setEnteredTitle('');
    setEnteredDescription('');
    setEnteredDate('');
    setEnteredType('')
    
  };

  

 

  

  return (
    <form onSubmit={submitHandler}>
      <div  className='new-dream__controls'>
          
        <div className='new-dream__control'>
          <label>Title</label>
          <input
            type='text'
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className='new-dream__control'>
          <label>Description</label>
          <input
            type='text'
            
            value={enteredDescription}
            onChange={descriptionChangeHandler}
          />
        </div>
        <div className='new-dream__control'>
          <label>Date</label>
          <input
            type='date'
            min='2021-01-01'
            max='2024-12-31'
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
        <div className='new-dream__control' >
        <label>Type</label>

        <select value={props.selected}             onChange={typeChangeHandler}
 >
          <option value='happy'>happy</option>
          <option value='sad'>sad</option>
          <option value='exciting'>exciting</option>
          <option value='scary'>scary</option>
        </select>
      </div>
      </div>
      <div className='new-dream__actions'>
        <button type='submit'>Add your DREAM</button>
      </div>
    </form>
  );
};

export default DreamForm;
