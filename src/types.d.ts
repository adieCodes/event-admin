interface EventEmoji {
  '--': '--';
  football: '⚽️';
  cinema: '🎥';
}

type EventTypes = keyof EventEmoji;
interface IEvent {
  id: string;
  name: string;
  date: string;
  type: keyof EventEmoji;
}

interface IEventListProps {
  events: IEvent[];
}
