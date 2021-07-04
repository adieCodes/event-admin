const eventTypes = ['--', 'football', 'cinema'];
type EventTypes = typeof eventTypes[number];

interface IEvent {
  id: string;
  name: string;
  date: string;
  type: EventTypes;
}

interface IEventListProps {
  events: IEvent[];
}
