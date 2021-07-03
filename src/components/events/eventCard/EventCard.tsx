import React from 'react';
import './EventCard.css';

const EventCard = () => (
  <div className="event">
    <div className="event-type">
      <span className="event-icon">⚽️</span>
    </div>
    <h1 className="event-title">Ukraine V England</h1>
    <p className="event-time">July 3</p>
  </div>
);

export default EventCard;
