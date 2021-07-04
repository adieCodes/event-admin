import { createContext, FC, useState } from 'react';

interface IEventContextState {
  events: IEvent[];
  addEvent: (event: IEvent) => void;
}

const contextDefaultValues: IEventContextState = {
  events: [
    {
      name: 'Ukraine v England',
      date: '2021-07-03',
      type: 'football',
    },
    {
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
    console.log(`newEvent: ${JSON.stringify(newEvent)}`);
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
