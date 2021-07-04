import React, { useState, ChangeEvent } from 'react';
import LinkBtn from '../../buttons/link/LinkBtn';
import './NewEventForm.css';

const eventTypes = ['--', 'football', 'cinema'] as const;
type EventTypes = typeof eventTypes[number];

interface IEventState {
  name: string;
  date: string;
  type: EventTypes;
}

const NewEventForm = () => {
  const [eventState, setEventState] = useState<IEventState>({
    name: '',
    date: '',
    type: eventTypes[0],
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setEventState((currentState) => ({
      ...currentState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="event-new_container">
      <form className="event-new">
        <h1>New Event</h1>
        <div>
          <label htmlFor="event-name">Event Name:</label>
          <input
            type="text"
            id="event-name"
            name="name"
            onChange={handleChange}
            value={eventState.name}
          ></input>
        </div>
        <div>
          <label htmlFor="event-date">Event Date:</label>
          <input
            type="date"
            id="event-date"
            name="date"
            onChange={handleChange}
            value={eventState.date}
          ></input>
        </div>
        <div>
          <label htmlFor="event-types">Event Type:</label>
          <select
            id="event-types"
            name="type"
            onChange={handleChange}
            value={eventState.type}
          >
            {eventTypes.map((e) => (
              <option value={e} key={e}>
                {e}
              </option>
            ))}
          </select>
        </div>
        <div className="event-submit_container">
          <LinkBtn to="/" text="Create Event" />
        </div>
      </form>
      <div className="event-filler">
        <h1>Give people something to look forward to</h1>
        <p className="event-emoji_lg">🥳</p>
      </div>
    </div>
  );
};

export default NewEventForm;
