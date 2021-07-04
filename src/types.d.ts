const eventTypes = ['--', 'football', 'cinema'];
type EventTypes = typeof eventTypes[number];

interface IEvent {
  name: string;
  date: string;
  type: EventTypes;
}

interface IEventListProps {
  events: IEvent[];
}
