import { createContext, FC, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

interface IEventContextState {
  events: IEvent[];
  addEvent: (event: IEvent) => void;
}

const contextDefaultValues: IEventContextState = {
  events: [
    {
      id: uuidv4(),
      name: 'Ukraine v England',
      date: '2021-07-03',
      type: 'football',
    },
    {
      id: uuidv4(),
      name: 'Black Widow',
      date: '2021-07-21',
      type: 'cinema',
    },
  ],
  addEvent: () => {},
};

export const EventContext =
  createContext<IEventContextState>(contextDefaultValues);

const EventProvider: FC = ({ children }) => {
  const [events, setEvents] = useState<IEvent[]>(contextDefaultValues.events);

  const addEvent = (newEvent: IEvent) => {
    setEvents((events) => [...events, newEvent]);
  };

  return (
    <EventContext.Provider
      value={{
        events,
        addEvent,
      }}
    >
      {children}
    </EventContext.Provider>
  );
};

export default EventProvider;
