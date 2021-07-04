import React, { useContext, useState } from 'react';
import { EventContext } from '../../../context/EventContext';
import './HomeFilter.css';

const HomeFilter = () => {
  const { filterEvents } = useContext(EventContext);
  const [activeBtn, setActiveBtn] = useState('all');

  const handleFilter = (filter: IEventFilters) => {
    filterEvents(filter);
    setActiveBtn(filter.type);
  };

  return (
    <div className="home-filter">
      <button
        className={`home-filterBtn ${activeBtn === 'all' ? 'active' : ''}`}
        onClick={() => handleFilter({ type: 'all' })}
      >
        All Events
      </button>
      <button
        className={`home-filterBtn home-filterBtn_prev ${
          activeBtn === 'prev' ? 'active' : ''
        }`}
        onClick={() => handleFilter({ type: 'prev' })}
      >
        Previous
      </button>
      <button
        className={`home-filterBtn home-filterBtn_fut ${
          activeBtn === 'future' ? 'active' : ''
        }`}
        onClick={() => handleFilter({ type: 'future' })}
      >
        Future
      </button>
    </div>
  );
};

export default HomeFilter;
