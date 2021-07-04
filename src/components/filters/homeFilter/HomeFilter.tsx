import React, { MouseEvent, useContext } from 'react';
import { EventContext } from '../../../context/EventContext';
import './HomeFilter.css';

const HomeFilter = () => {
  const { filterEvents } = useContext(EventContext);
  const handleFilter = (filter: IEventFilters) => {
    filterEvents(filter);
  };

  return (
    <div className="home-filter">
      <button
        className="home-filterBtn"
        onClick={() => handleFilter({ type: 'all' })}
      >
        All Events
      </button>
      <button
        className="home-filterBtn home-filterBtn_prev"
        onClick={() => handleFilter({ type: 'prev' })}
      >
        Previous
      </button>
      <button
        className="home-filterBtn home-filterBtn_fut"
        onClick={() => handleFilter({ type: 'future' })}
      >
        Future
      </button>
    </div>
  );
};

export default HomeFilter;
