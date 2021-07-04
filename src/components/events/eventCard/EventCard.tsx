import React from 'react';
import { Link } from 'react-router-dom';
import { eventEmojiLookup } from '../../../lib/eventType';
import './EventCard.css';

interface IEventCardProps {
  event: IEvent;
}
const EventCard = ({ event }: IEventCardProps) => {
  const eventEmoji = eventEmojiLookup(event.type);

  return (
    <Link to={`/event/${event.id}`} className="event">
      <div className="event-type">
        <span className="event-icon">{eventEmoji}</span>
      </div>
      <h1 className="event-title">{event.name}</h1>
      <p className="event-date">{event.date}</p>
    </Link>
  );
};

export default EventCard;
