import React, { useState, ChangeEvent, FormEvent, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { EventContext } from '../../../context/EventContext';
import './NewEventForm.css';

const eventTypes = ['--', 'football', 'cinema'] as const;

const NewEventForm = ({ history }: RouteComponentProps) => {
  const { addEvent } = useContext(EventContext);

  const [eventState, setEventState] = useState<IEvent>({
    id: uuidv4(),
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

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    addEvent(eventState);
    history.push('/');
  };

  return (
    <div className="event-new_container">
      <form className="event-new" onSubmit={handleSubmit}>
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
          <button type="submit" className="button">
            Create Event
          </button>
        </div>
      </form>
      <div className="event-filler">
        <h1>Give people something to look forward to</h1>
        <p className="event-emoji_lg">🥳</p>
      </div>
    </div>
  );
};

export default withRouter(NewEventForm);
