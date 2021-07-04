import React from 'react';
import { eventEmojiLookup } from '../../../lib/eventType';
import './EventCard.css';

interface IEventCardProps {
  event: IEvent;
}
const EventCard = ({ event }: IEventCardProps) => {
  const eventEmoji = eventEmojiLookup(event.type);

  return (
    <div className="event">
      <div className="event-type">
        <span className="event-icon">{eventEmoji}</span>
      </div>
      <h1 className="event-title">{event.name}</h1>
      <p className="event-date">{event.date}</p>
    </div>
  );
};

export default EventCard;
