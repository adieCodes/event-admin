import React, { useContext, FC } from 'react';
import { EventContext } from '../../../context/EventContext';
import EventCard from '../eventCard/EventCard';
import './EventList.css';

const EventList: FC = () => {
  const { events } = useContext(EventContext);

  return (
    <div className="eventList">
      {events.map((e) => (
        <EventCard event={e} key={e.id} />
      ))}
    </div>
  );
};

export default EventList;
