import React, { useState } from 'react';

import NewDream from './components/NewDream/NewDream';
import Dreams from './components/Dreams/Dreams';
import './App.css'
const Dreams_obj = [

];

const App = () => {
  const [dreams, setDreams] = useState(Dreams_obj);

  const addDreamHandler = (dream) => {
    setDreams((prevDreams) => {
      return [dream, ...prevDreams];
    });
  };


  return (
    <div>
      <NewDream onAddDream={addDreamHandler} />
      <Dreams items={dreams} />
    </div>
  );
};

export default App;
