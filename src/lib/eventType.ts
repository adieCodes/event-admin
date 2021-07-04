export const eventEmoji: EventEmoji = {
  '--': '--',
  football: '⚽️',
  cinema: '🎥',
};

export const eventEmojiLookup = (type: EventTypes) => eventEmoji[type];
