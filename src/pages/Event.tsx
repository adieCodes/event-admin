import React, { useContext } from 'react';
import { useParams } from 'react-router';
import { EventContext } from '../context/EventContext';
import { eventEmojiLookup } from '../lib/eventType';

interface IEventProps {
  id: string;
}

const Event = () => {
  const { events } = useContext(EventContext);
  const { id } = useParams<IEventProps>();

  const selectedEvent = events.filter((e) => e.id === id)[0];
  const eventEmoji = eventEmojiLookup(selectedEvent.type);

  return (
    <div className="event">
      <div className="event-type">
        <span className="event-icon">{eventEmoji}</span>
      </div>
      <h1 className="event-title">{selectedEvent.name}</h1>
      <p className="event-date">{selectedEvent.date}</p>
    </div>
  );
};

export default Event;
