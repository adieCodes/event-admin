import React from 'react';
import './EventCard.css';

interface IEventCardProps {
  event: IEvent;
}
const EventCard = ({ event }: IEventCardProps) => (
  <div className="event">
    <div className="event-type">
      <span className="event-icon">⚽️</span>
    </div>
    <h1 className="event-title">{event.name}</h1>
    <p className="event-time">{event.date}</p>
  </div>
);

export default EventCard;
