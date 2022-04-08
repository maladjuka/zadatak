import React, { useState } from 'react';

import Card from '../UI/Card';
import DreamsFilter from './DreamsFilter';
import DreamsList from './DreamsList';

const Dreams = (props) => {
  const [filteredYear, setFilteredYear] = useState('2022');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredDreams = props.items.filter((dream) => {
    return dream.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card >
        <DreamsFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <DreamsList items={filteredDreams} />
      </Card>
    </div>
  );
};

export default Dreams ;
